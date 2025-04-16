import { getAddressGetAreaListTree, getUserInfo, SystemCityTreeVo, User } from '@/service/app'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<User>({})
    const token = ref('')
    const setUserInfo = (val: User) => {
      userInfo.value = val
    }
    const setToken = (val: string) => {
      token.value = val
    }
    const clearUserInfo = () => {
      userInfo.value = {}
      token.value = ''
    }
    const isLogin = computed(() => !!token.value)

    /** 更新用户信息 */
    const updateUserInfo = async () => {
      const { data: info } = await getUserInfo({})
      setUserInfo(info ?? {})
    }

    const areaList = ref<SystemCityTreeVo[]>([])
    /** 获取城市信息 */
    const getAreaList = async () => {
      const res = await getAddressGetAreaListTree({})
      areaList.value = res.data ?? []
    }

    return {
      userInfo,
      setToken,
      token,
      setUserInfo,
      clearUserInfo,
      updateUserInfo,
      isLogin,
      getAreaList,
      areaList,
    }
  },
  {
    persist: true,
  },
)
