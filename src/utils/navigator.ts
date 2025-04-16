export type UrlOptions = Parameters<Pick<Uni, 'navigateTo'>['navigateTo']>[0]['url']
/**
 * 构建查询字符串
 * 根据提供的参数对象，构建一个查询字符串
 * @param params 可选参数对象，其属性将被转换为查询字符串的键值对
 * @returns 如果提供了参数，则返回构建的查询字符串；否则返回空字符串
 */
function buildQueryString(params?: Record<string, any>): string {
  return params
    ? Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&')
    : ''
}
/**
 * 处理导航结果
 * 该函数根据导航操作的回调结果判断操作是否成功，并打印相应的日志信息
 * @param res 导航操作的回调结果，包含错误信息等
 * @param type 导航类型，用于在日志中标识导航操作的类型
 */
function handleNavigationResult(res: any, type: string) {
  if (res.errMsg.includes('ok')) {
    console.log(`${type} success:`, res)
  } else {
    console.error(`${type} failed:`, res)
  }
}

export function navigateTo(
  url: UrlOptions,
  params?: Record<string, any>,
  animationType?:
    | 'auto'
    | 'none'
    | 'slide-in-right'
    | 'slide-in-left'
    | 'slide-in-top'
    | 'slide-in-bottom'
    | 'fade-in'
    | 'zoom-out'
    | 'zoom-fade-out'
    | 'pop-in',
  animationDuration?: number,
) {
  const queryString = buildQueryString(params)
  const fullUrl = queryString ? `${url}?${queryString}` : url

  uni.navigateTo({
    url: fullUrl,
    animationType: animationType || 'pop-in',
    animationDuration: animationDuration || 300,
    success: (res) => handleNavigationResult(res, 'Navigate to'),
    fail: (res) => handleNavigationResult(res, 'Navigate to'),
  })
}

export function redirectTo(url: UrlOptions, params?: Record<string, any>) {
  const queryString = buildQueryString(params)
  const fullUrl = queryString ? `${url}?${queryString}` : url

  uni.redirectTo({
    url: fullUrl,
    success: (res) => handleNavigationResult(res, 'Redirect to'),
    fail: (res) => handleNavigationResult(res, 'Redirect to'),
  })
}

export function reLaunch(url: UrlOptions, params?: Record<string, any>) {
  const queryString = buildQueryString(params)
  const fullUrl = queryString ? `${url}?${queryString}` : url

  uni.reLaunch({
    url: fullUrl,
    success: (res) => handleNavigationResult(res, 'ReLaunch'),
    fail: (res) => handleNavigationResult(res, 'ReLaunch'),
  })
}

export function switchTab(url: UrlOptions) {
  uni.switchTab({
    url,
    success: (res) => handleNavigationResult(res, 'Switch tab'),
    fail: (res) => handleNavigationResult(res, 'Switch tab'),
  })
}

export function navigateBack(delta?: number) {
  uni.navigateBack({
    delta: delta || 1,
    success: (res) => handleNavigationResult(res, 'Navigate back'),
    fail: (res) => handleNavigationResult(res, 'Navigate back'),
  })
}
