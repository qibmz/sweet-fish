// src/utils/share/index.ts
import UniShare from './js_sdk/uni-share'

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
  share:
    | { provider: string; scene?: string; type?: number; miniProgram?: MiniProgramConfig }
    | 'copyurl'
    | 'shareSystem'
}
// 扩展 ShareMenuItem 的 share 类型定义，支持 miniProgram 属性
interface MiniProgramConfig {
  id: string
  path: string
  webUrl: string
  type: number
}
export class ShareService {
  private uniShare: UniShare

  constructor() {
    this.uniShare = new UniShare()
  }

  /**
   * 显示分享菜单
   * @example
   * const share = new ShareService()
const hand = () => {
  share.showShareMenu()
}
onBackPress(({ from }) => {
  if (from === 'backbutton') {
    nextTick(() => {
      share.hideShareMenu()
    })
    return share.isShareMenuVisible()
  }
})
   * 此函数用于展示一个分享菜单，其中可以包含自定义的内容和菜单项。
   * 如果没有提供自定义内容或菜单项，则会使用默认的设置。
   *
   * @param customContent 可选的自定义分享内容，部分或全部替换默认内容
   * @param customMenus 可选的自定义菜单项，替换默认菜单项
   */
  public showShareMenu(customContent?: Partial<ShareContent>, customMenus?: ShareMenuItem[]): void {
    const defaultContent: ShareContent = {
      type: 0,
      href: 'https://uniapp.dcloud.io/',
      title: '标题',
      summary: '描述',
      imageUrl: 'https://img-cdn-aliyun.dcloud.net.cn/stream/icon/__UNI__HelloUniApp.png',
    }
    const defaultMenus: ShareMenuItem[] = [
      {
        img: '/static/images/share/wechatfriend.png',
        text: '微信好友',
        share: { provider: 'weixin', scene: 'WXSceneSession' },
      },
      {
        img: '/static/images/share/wechatmoments.png',
        text: '微信朋友圈',
        share: { provider: 'weixin', scene: 'WXSceneTimeline' },
      },
      {
        img: '/static/images/share/mp_weixin.png',
        text: '微信小程序',
        share: {
          provider: 'weixin',
          scene: 'WXSceneSession',
          type: 5,
          miniProgram: {
            id: 'gh_3ab285b62ff5',
            path: customContent?.href?.replace(import.meta.env.VITE_SHARE_BASEURL, '') ?? '',
            webUrl: customContent?.href ?? '',
            type: 0,
          },
        },
      },
      // {
      //   img: '/static/images/share/weibo.png',
      //   text: '微博',
      //   share: { provider: 'sinaweibo' },
      // },
      // {
      //   img: '/static/images/share/qq.png',
      //   text: 'QQ',
      //   share: { provider: 'qq' },
      // },
      {
        img: '/static/images/share/copyurl.png',
        text: '复制',
        share: 'copyurl',
      },
      {
        img: '/static/images/share/more.png',
        text: '更多',
        share: 'shareSystem',
      },
    ]

    const content = { ...defaultContent, ...customContent }
    const menus = customMenus || defaultMenus

    this.uniShare.show(
      {
        content,
        menus,
        cancelText: '取消分享',
      },
      (e) => {
        console.log('分享回调：', e)
      },
    )
  }

  /**
   * 隐藏分享菜单
   */
  public hideShareMenu(): void {
    this.uniShare.hide()
  }

  /**
   * 判断分享菜单是否显示
   */
  public isShareMenuVisible(): boolean {
    return this.uniShare.isShow
  }
}
