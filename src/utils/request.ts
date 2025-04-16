import { CustomRequestOptions } from '@/interceptors/request'
import { useUserStore } from '@/store'
import { navigateTo } from './navigator'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

/**
 * 请求方法: 主要是对 uni.request 的封装，去适配 openapi-ts-request 的 request 方法
 * @param options 请求参数
 * @returns 返回 Promise 对象
 */
const http = <T>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {
        const resData = res.data as IResData<T>
        // 状态码 2xx，参考 axios 的设计
        if (resData.code === 200) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as T)
        } else if (resData.code === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页，并携带当前页面的路径和参数
          useUserStore().clearUserInfo()
          const currentPage: any = getCurrentPages().pop()
          if (currentPage) {
            const url = currentPage.route
            const options = currentPage.options
            const queryString = Object.keys(options)
              .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`)
              .join('&')
            uni.showToast({
              title: resData.message,
              icon: 'none',
            })
            setTimeout(() => {
              navigateTo(`/login-sub/login/index`, {
                url: encodeURIComponent(`/${url}?${queryString}`),
              })
            }, 1000)
          } else {
            navigateTo(`/login-sub/login/index`)
          }
          reject(res)
        } else {
          !options.hideErrorToast &&
            uni.showToast({ title: resData.message ?? '网络异常', icon: 'none' })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/*
 * openapi-ts-request 工具的 request 跨客户端适配方法
 */
export default function request<T = unknown>(
  url: string,
  options: Omit<CustomRequestOptions, 'url'> & {
    params?: Record<string, unknown>
    headers?: Record<string, unknown>
  },
) {
  const requestOptions = {
    url,
    ...options,
  }

  if (options.params) {
    requestOptions.query = requestOptions.params
    delete requestOptions.params
  }

  if (options.headers) {
    requestOptions.header = options.headers
    delete requestOptions.headers
  }
  return http<T>(requestOptions)
}
