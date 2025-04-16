import UniImageMenu from './uni-image-menu'

interface ShareContent {
  type: number
  href: string
  title: string
  summary: string
  imageUrl: string
}

interface ShareMenuItem {
  img: string
  text: string
  share: ShareAction | 'copyurl' | 'shareSystem'
}

type ShareAction = {
  provider: string
  scene?: string
  miniProgram?: {
    id: string
    path: string
    webUrl: string
    type: number
  }
}

class UniShare extends UniImageMenu {
  /**
   * 显示分享菜单
   * @param param - 分享参数
   * @param callback - 回调函数
   */
  public async show(
    param: { content: ShareContent; menus: ShareMenuItem[]; cancelText: string },
    callback: (event: any) => void,
  ): Promise<void> {
    const menus: ShareMenuItem[] = []
    plus.share.getServices(
      (services) => {
        const availableServices = services.filter((item) => item.nativeClient)
        const serviceIds = availableServices.map((e) => e.id)

        param.menus.forEach((item) => {
          if (
            typeof item.share === 'string' ||
            (typeof item.share !== 'string' && serviceIds.includes(item.share.provider))
          ) {
            menus.push(item)
          }
        })

        super.show({ list: menus, cancelText: param.cancelText }, (e) => {
          callback(e)
          if (e.event === 'clickMenu') {
            const selectedMenu = menus[e.index]
            if (typeof selectedMenu.share === 'string') {
              this[selectedMenu.share](param)
            } else {
              uni.share({
                ...param.content,
                ...selectedMenu.share,
                success: () => {
                  console.log('分享成功')
                  super.hide()
                },
                fail: (err: any) => {
                  console.error('分享失败：', err)
                  uni.showModal({
                    content: JSON.stringify(err),
                    showCancel: false,
                    confirmText: '知道了',
                  })
                },
              })
            }
          }
        })
      },
      (err) => {
        console.error('获取服务供应商失败：', err)
        uni.showModal({
          title: '获取服务供应商失败',
          content: JSON.stringify(err),
          showCancel: false,
          confirmText: '知道了',
        })
      },
    )
  }

  /**
   * 复制链接
   * @param param - 分享内容
   */
  public copyurl(param: { content: ShareContent }): void {
    uni.setClipboardData({
      data: param.content.href,
      success: () => {
        console.log('复制成功')
        uni.showToast({
          title: '复制成功',
          icon: 'none',
        })
        super.hide()
      },
      fail: (err) => {
        console.error('复制失败：', err)
        uni.showModal({
          content: JSON.stringify(err),
          showCancel: false,
        })
      },
    })
  }

  /**
   * 系统分享
   * @param param - 分享内容
   */
  public shareSystem(param: { content: ShareContent }): void {
    plus.share.sendWithSystem(
      {
        type: 'text',
        content: `${param.content.title} ${param.content.summary || ''}`,
        href: param.content.href,
      },
      () => {
        console.log('系统分享成功')
        super.hide()
      },
      (err) => {
        console.error('系统分享失败：', err)
        uni.showModal({
          title: '系统分享失败',
          content: JSON.stringify(err),
          showCancel: false,
          confirmText: '知道了',
        })
      },
    )
  }
}

export default UniShare
