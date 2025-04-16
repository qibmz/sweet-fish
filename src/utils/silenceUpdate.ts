import { getAppinfoNew } from '@/service/app'
import { navigateTo } from './navigator'

// 获取本地应用资源版本号
export function getAppVersion() {
  plus.runtime.getProperty(plus.runtime.appid ?? '100', (widgetInfo) => {
    // 获取服务器的版本号
    getAppinfoNew({}).then((res) => {
      const platform = uni.getSystemInfoSync().platform
      let upgradeVersion = widgetInfo.version ?? '1.0.0'
      let upgradeWgtUrl = res.data?.wgtUrl
      if (platform === 'android') {
        upgradeVersion = res.data?.version ?? '1.0.0'
      } else if (platform === 'ios') {
        upgradeVersion = res.data?.iosVersion ?? '1.0.0'
        res.data?.wgtUrl?.match(/.apk/) && (upgradeWgtUrl = res.data?.iosWgtUrl)
      }
      if (compareVersions(upgradeVersion, widgetInfo.version ?? '1.0.0') > 0) {
        if (upgradeWgtUrl?.match(/.wgt/)) {
          silenceUpdate(upgradeWgtUrl)
        } else {
          setTimeout(() => {
            navigateTo('/pages/hotUpdate/index', res.data)
          }, 3000)
        }
      }
    })
  })
}
function compareVersions(version1: string, version2: string): number {
  const v1Parts = version1.split('.').map(Number)
  const v2Parts = version2.split('.').map(Number)

  const maxLength = Math.max(v1Parts.length, v2Parts.length)

  for (let i = 0; i < maxLength; i++) {
    const v1 = v1Parts[i] || 0
    const v2 = v2Parts[i] || 0

    if (v1 > v2) {
      return 1
    }
    if (v1 < v2) {
      return -1
    }
  }

  return 0
}

/**
 * 下载并安装应用的更新包
 *
 * 该函数通过uni.downloadFile下载更新包，然后使用plus.runtime.install进行安装
 * 安装成功后提示用户重启应用，以确保新版本生效
 *
 * @param url 更新包的下载地址
 */
export function silenceUpdate(url: string): void {
  uni.downloadFile({
    url,
    success: (res) => {
      if (res.statusCode === 200) {
        plus.runtime.install(
          res.tempFilePath,
          {
            force: true, // true表示强制安装，不进行版本号的校验；false则需要版本号校验，
          },
          () => {
            uni.showModal({
              title: '更新提示',
              content: '新版本已经准备好，请重启应用',
              showCancel: false,
              success: (res) => {
                if (res.confirm) {
                  plus.runtime.restart()
                }
              },
            })
          },
          (e: any) => {
            console.error('install fail...', e)
          },
        )
      }
    },
  })
}
