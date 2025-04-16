import { getSystemConfig, UserConfigResponseduixiang } from '@/service/app'
import { defineStore } from 'pinia'

/** 系统配置 */
export const useSystemStore = defineStore(
  'system',
  () => {
    const systemConfig = reactive<UserConfigResponseduixiang>({})
    const handGetSystemConfig = async () => {
      const res = await getSystemConfig({})
      Object.assign(systemConfig, res.data)
    }
    const getPicUrl = (imgUrl?: string) => {
      if (!imgUrl) {
        console.error('!imgUrl')
        return ''
      }
      if (imgUrl.startsWith('http')) {
        return imgUrl
      }
      if (!systemConfig.picUrlPre) {
        console.error('!picUrlPre.value')
      }
      const picUrl = systemConfig.picUrlPre + imgUrl
      return picUrl
    }
    const systemInfo = reactive<Partial<UniNamespace.GetAppBaseInfoResult>>({})
    const handGetSystemInfo = async () => {
      const res = uni.getSystemInfoSync()
      Object.assign(systemInfo, res)
    }
    return {
      handGetSystemConfig,
      getPicUrl,
      handGetSystemInfo,
      systemInfo,
      systemConfig,
    }
  },
  {
    persist: true,
  },
)
