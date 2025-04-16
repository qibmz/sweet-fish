class NvImageMenu {
  public isShow: boolean
  private nvMask?: PlusNativeObjView
  private nvImageMenu?: PlusNativeObjView

  constructor() {
    this.isShow = false
  }

  /**
   * 显示菜单
   * @param param - 包含菜单项和取消按钮文本
   * @param callback - 点击事件回调
   */
  public show(
    param: { list?: MenuItem[]; cancelText?: string },
    callback: (event: MenuEvent) => void,
  ): void {
    if (!plus || !plus.nativeObj) {
      console.error('plus 或 plus.nativeObj 未定义，请检查依赖是否正确加载')
      return
    }
    const { list = [], cancelText = '取消' } = param

    // 默认菜单项
    const defaultList: MenuItem[] = [
      {
        img: '/static/sharemenu/wechatfriend.png',
        text: '图标文字',
      },
    ]

    const finalList = list.length > 0 ? list : defaultList

    // 计算屏幕布局
    const screenWidth = plus?.screen?.resolutionWidth ?? 0
    const screenHeight = plus?.screen?.resolutionHeight ?? 0
    const margin = 20
    const iconWidth = 60
    const icontextSpace = 5
    const textHeight = 12
    const left1 = (margin / 360) * screenWidth
    const iconSpace = (screenWidth - left1 * 2 - iconWidth * 4) / 3 || iconWidth + 5

    const TOP = {
      top1: left1,
      top2: left1 + iconWidth + icontextSpace + textHeight + left1,
    }
    const LEFT = {
      left1,
      left2: left1 + iconWidth + iconSpace,
      left3: left1 + (iconWidth + iconSpace) * 2,
      left4: left1 + (iconWidth + iconSpace) * 3,
    }
    // 创建遮罩层
    this.nvMask = new plus.nativeObj.View('nvMask', {
      top: '0px',
      left: '0px',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.2)',
    })

    // 创建菜单视图
    this.nvImageMenu = new plus.nativeObj.View('nvImageMenu', {
      bottom: '0px',
      left: '0px',
      height: `${(iconWidth + textHeight + 2 * margin) * Math.ceil(finalList.length / 4) + 44}px`,
      width: '100%',
      backgroundColor: 'rgb(255,255,255)',
    })

    // 遮罩层点击事件
    this.nvMask.addEventListener('click', () => {
      this.hide()
      callback({ event: 'clickMask' })
    })

    // 绘制菜单内容
    const drawList = finalList.flatMap((item, i) => [
      {
        tag: 'img',
        src: item.img,
        position: {
          top: TOP['top' + (Math.floor(i / 4) + 1)],
          left: LEFT['left' + (1 + (i % 4))],
          width: iconWidth,
          height: iconWidth,
        },
      },
      {
        tag: 'font',
        text: item.text,
        textStyles: { size: textHeight },
        position: {
          top: TOP['top' + (Math.floor(i / 4) + 1)] + iconWidth + icontextSpace,
          left: LEFT['left' + (1 + (i % 4))],
          width: iconWidth,
          height: textHeight,
        },
      },
    ])

    this.nvImageMenu.draw([
      {
        tag: 'rect',
        color: '#e7e7e7',
        position: { top: '0px', height: '1px' },
      },
      {
        tag: 'font',
        text: cancelText,
        textStyles: { size: '14px' },
        position: { bottom: '0px', height: '44px' },
      },
      {
        tag: 'rect',
        color: '#e7e7e7',
        position: { bottom: '45px', height: '1px' },
      },
      ...drawList,
    ])

    // 菜单点击事件
    this.nvImageMenu.addEventListener('click', (e: any) => {
      if (e.screenY > screenHeight - 44) {
        // 使用安全的 screenHeight
        this.hide()
      } else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
        // 屏幕左右边缘5像素及菜单顶部5像素不处理点击
      } else {
        const row = e.clientY < TOP.top2 - left1 / 2 ? 0 : 1
        const col = [LEFT.left1, LEFT.left2, LEFT.left3, LEFT.left4].findIndex(
          (left) => e.clientX < left + iconWidth / 2,
        )
        const index = row * 4 + col
        callback({ event: 'clickMenu', index })
      }
    })

    // 显示菜单
    this.nvMask.show()
    this.nvImageMenu.show()
    this.isShow = true
  }

  /**
   * 隐藏菜单
   */
  public hide(): void {
    if (this.nvMask && this.nvImageMenu) {
      this.nvMask.hide()
      this.nvImageMenu.hide()
      this.isShow = false
    }
  }

  public getIsShow(): boolean {
    return this.isShow
  }
}

interface MenuItem {
  img: string
  text: string
}

interface MenuEvent {
  event: 'clickMask' | 'clickMenu'
  index?: number
}

export default NvImageMenu
