import { pages, subPackages, tabBar } from '@/pages.json'
import { ProductDetailResponse } from '@/service/app'
import { useSystemStore } from '@/store/system'
const getLastPage = () => {
  // getCurrentPages() 至少有1个元素，所以不再额外判断
  // const lastPage = getCurrentPages().at(-1)
  // 上面那个在低版本安卓中打包会报错，所以改用下面这个【虽然我加了 src/interceptions/prototype.ts，但依然报错】
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

/** 判断当前页面是否是 tabbar 页  */
export const getIsTabbar = () => {
  if (!tabBar) {
    return false
  }
  if (!tabBar.list.length) {
    // 通常有 tabBar 的话，list 不能有空，且至少有2个元素，这里其实不用处理
    return false
  }
  const lastPage = getLastPage()
  const currPath = lastPage.route
  return !!tabBar.list.find((e) => e.pagePath === currPath)
}

/**
 * 获取当前页面路由的 path 路径和 redirectPath 路径
 * path 如 '/pages/login/index'
 * redirectPath 如 '/pages/demo/base/route-interceptor'
 */
export const currRoute = () => {
  const lastPage = getLastPage()
  const currRoute = (lastPage as any).$page
  // console.log('lastPage.$page:', currRoute)
  // console.log('lastPage.$page.fullpath:', currRoute.fullPath)
  // console.log('lastPage.$page.options:', currRoute.options)
  // console.log('lastPage.options:', (lastPage as any).options)
  // 经过多端测试，只有 fullPath 靠谱，其他都不靠谱
  const { fullPath } = currRoute as { fullPath: string }
  // console.log(fullPath)
  // eg: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor (小程序)
  // eg: /pages/login/index?redirect=%2Fpages%2Froute-interceptor%2Findex%3Fname%3Dfeige%26age%3D30(h5)
  return getUrlObj(fullPath)
}

const ensureDecodeURIComponent = (url: string) => {
  if (url.startsWith('%')) {
    return ensureDecodeURIComponent(decodeURIComponent(url))
  }
  return url
}
/**
 * 解析 url 得到 path 和 query
 * 比如输入url: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor
 * 输出: {path: /pages/login/index, query: {redirect: /pages/demo/base/route-interceptor}}
 */
export const getUrlObj = (url: string) => {
  const [path, queryStr] = url.split('?')
  // console.log(path, queryStr)

  if (!queryStr) {
    return {
      path,
      query: {},
    }
  }
  const query: Record<string, string> = {}
  queryStr.split('&').forEach((item) => {
    const [key, value] = item.split('=')
    // console.log(key, value)
    query[key] = ensureDecodeURIComponent(value) // 这里需要统一 decodeURIComponent 一下，可以兼容h5和微信y
  })
  return { path, query }
}

// 定义页面配置的统一接口
interface PageConfig {
  path: string
  type: string
  style: {
    navigationStyle?: string
    navigationBarTitleText: string
  }
  layout?: string
  needLogin?: boolean // 添加 needLogin 属性
}

// 修改 getAllPages 方法
export const getAllPages = <T extends keyof PageConfig>(key: T | '') => {
  // 这里处理主包
  const mainPages = [
    ...pages
      .filter((page: PageConfig) => !key || page[key] === true) // 明确类型检查
      .map((page: PageConfig) => ({
        ...page,
        path: `/${page.path}`,
      })),
  ]

  // 这里处理分包
  const subPages: PageConfig[] = []
  subPackages.forEach((subPageObj) => {
    const { root } = subPageObj

    subPageObj.pages
      .filter((page: PageConfig) => !key || page[key] === true) // 明确类型检查
      .forEach((page: PageConfig) => {
        subPages.push({
          ...page,
          path: `/${root}/${page.path}`,
        })
      })
  })

  const result = [...mainPages, ...subPages]
  return result
}
/**
 * 得到所有的需要登录的 pages，包括主包和分包的
 * 只得到 path 数组
 */
export const getNeedLoginPages = (): string[] => getAllPages('needLogin').map((page) => page.path)

/**
 * 得到所有的需要登录的 pages，包括主包和分包的
 * 只得到 path 数组
 */
export const needLoginPages: string[] = getAllPages('needLogin').map((page) => page.path)

/**
 * 根据微信小程序当前环境，判断应该获取的 baseUrl
 */
export const getEnvBaseUrl = () => {
  // 请求基准地址
  const baseUrl = import.meta.env.VITE_SERVER_BASEURL

  // 微信小程序端环境区分
  // if (isMpWeixin) {
  //   const {
  //     miniProgram: { envVersion },
  //   } = uni.getAccountInfoSync()

  //   switch (envVersion) {
  //     case 'develop':
  //       baseUrl = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_DEVELOP || baseUrl
  //       break
  //     case 'trial':
  //       baseUrl = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_TRIAL || baseUrl
  //       break
  //     case 'release':
  //       baseUrl = import.meta.env.VITE_SERVER_BASEURL__WEIXIN_RELEASE || baseUrl
  //       break
  //   }
  // }

  return baseUrl
}

/**
 * 根据微信小程序当前环境，判断应该获取的 UPLOAD_BASEURL
 */
export const getEnvBaseUploadUrl = () => {
  // 请求基准地址
  const baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL

  // 微信小程序端环境区分
  // if (isMpWeixin) {
  //   const {
  //     miniProgram: { envVersion },
  //   } = uni.getAccountInfoSync()

  //   switch (envVersion) {
  //     case 'develop':
  //       baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_DEVELOP || baseUploadUrl
  //       break
  //     case 'trial':
  //       baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_TRIAL || baseUploadUrl
  //       break
  //     case 'release':
  //       baseUploadUrl = import.meta.env.VITE_UPLOAD_BASEURL__WEIXIN_RELEASE || baseUploadUrl
  //       break
  //   }
  // }

  return baseUploadUrl
}

/**
 * 隐藏手机号码的中间部分
 *
 * @param phone 手机号码字符串
 * @param startIdx 隐藏部分的起始索引，默认为3
 * @param endIdx 隐藏部分的结束索引，默认为7
 * @returns 处理后的手机号码字符串，中间部分被星号隐藏
 */
export const hidePhoneMiddle = (phone: string, startIdx: number = 3, endIdx: number = 7) => {
  // 使用slice方法和repeat方法生成星号字符串
  const stars = '*'.repeat(endIdx - startIdx)
  // 将星号字符串替换到手机号的指定位置
  return phone.slice(0, startIdx) + stars + phone.slice(endIdx)
}

/** 拨打电话 */
export function makePhoneCall(phoneNumber: string) {
  uni.makePhoneCall({
    phoneNumber,
  })
}

/** 复制内容 */
export function copyText(text: string) {
  uni.setClipboardData({
    data: text,
  })
}

/** 获取当前位置 */
export function getLocation() {
  return new Promise((resolve, reject) => {
    uni.getLocation({
      type: 'wgs84',
      success: function (res) {
        const { longitude, latitude } = res
        resolve({ longitude, latitude })
      },
      fail: function (err) {
        reject(err)
      },
    })
  })
}

/** img字符串转img数组 */
export const imgStrToArr = (imgStr: string) => {
  if (!imgStr) return []

  return imgStr.split(',').map((img) => {
    return useSystemStore().getPicUrl(img)
  })
}
// 定义 productValue 的类型接口
interface ProductValueItem {
  id: number
  image: string
  price: number
  stock: number
}

/** 转换sku数据 */
export const getSku = (
  goods: {
    _id: number | undefined
    name: string | undefined
    goods_thumb: string
    spec_list: any[]
    sku_list: {
      _id: any
      goods_name: string
      image: string
      price: any
      sku_name_arr: string[]
      stock: any
    }[]
  },
  resData: ProductDetailResponse,
) => {
  const getPicUrl = useSystemStore().getPicUrl
  const productValue = resData.productValue ?? {}
  const productAttr = resData.productAttr ?? []
  goods._id = resData.productInfo?.id
  goods.name = resData.productInfo?.storeName
  goods.goods_thumb = getPicUrl(resData.productInfo?.image)
  const skuNameArr = Object.keys(productValue)
  const specLen = productAttr?.length
  goods.spec_list = Array(specLen).fill(null)
  goods.sku_list = skuNameArr.map((item, i) => {
    if (i < specLen) {
      const attr = productAttr[i]
      goods.spec_list[i] = {
        name: attr.attrName,
        list: attr.attrValues?.split(',').map((item) => {
          return { name: item }
        }),
      }
    }
    const temp = productValue[item] as ProductValueItem
    return {
      _id: temp.id,
      goods_name: '',
      image: getPicUrl(temp.image),
      price: temp.price,
      sku_name_arr: item.split(','),
      stock: temp.stock,
    }
  })
}
