import { postPayPayment } from '@/service/app'
import { PaymentChannel } from './type'
import { isH5, isMpWeixin } from '../platform'
import { redirectTo } from '../navigator'

/**
 * 支付参数类型
 */
type PayParams = {
  orderNo: string
  payPassword: string
  globalOrderNum: string
  payType: PaymentChannel
}

/**
 * 支付方法映射
 */
const paymentMethods: { [key in PaymentChannel]: (res: any) => void } = {
  [PaymentChannel.WECHAT]: wechatPay,
  [PaymentChannel.ALIPAY]: aliPay,
  [PaymentChannel.YUE]: yuePay,
}

/**
 * 调起支付
 * @param params - 支付参数
 */
export async function pay(params: PayParams) {
  try {
    uni.showLoading({ title: '支付中' })
    let returnUrl
    if (isH5) {
      const { origin } = window.location
      returnUrl = origin + '/#/pages/index/index'
    }
    let code
    if (isMpWeixin) {
      code = await getWechatCode()
    }
    const res = await postPayPayment({
      body: {
        ...params,
        ...(isH5 ? { returnUrl } : {}),
        ...(isMpWeixin ? { code } : {}),
      },
    })
    uni.setStorageSync('payOrderNum', res.data?.orderNum)
    const paymentMethod = paymentMethods[params.payType]
    if (paymentMethod) {
      await paymentMethod(res)
    } else {
      throw new Error(`Unsupported payment channel: ${params.payType}`)
    }
    redirectTo('/pages/index/index')
  } catch (error) {
    console.error('支付失败:', error)
    uni.showToast({ title: '支付失败', icon: 'none' })
    return Promise.reject(error)
  } finally {
    uni.hideLoading()
  }
}
/**
 * 微信支付
 */
async function wechatPay(res: { weChatTradeMpRequestBody: any; weChatTradeAppRequestBody: any }) {
  if (isMpWeixin) {
    return new Promise<void>((resolve, reject) => {
      uni.requestPayment({
        provider: 'wxpay',
        orderInfo: res.weChatTradeMpRequestBody,
        success: () => resolve(),
        fail: (err) => reject(err),
      })
    })
  }
  return new Promise<void>((resolve, reject) => {
    uni.requestPayment({
      provider: 'wxpay',
      orderInfo: res.weChatTradeAppRequestBody,
      success: () => resolve(),
      fail: (err) => reject(err),
    })
  })
}

/**
 * 支付宝支付
 */
function aliPay(res: { aliTradeH5RequestBody: any; aliTradeAppRequestBody: any }) {
  if (isH5) {
    return handleAlipayH5Pay(res.aliTradeH5RequestBody)
  }
  return new Promise<void>((resolve, reject) => {
    uni.requestPayment({
      provider: PaymentChannel.ALIPAY,
      orderInfo: res.aliTradeAppRequestBody,
      success: () => resolve(),
      fail: (err) => reject(err),
    })
  })
}
/**
 * 处理H5支付宝支付
 */
const handleAlipayH5Pay = (orderInfo: string): Promise<void> => {
  return new Promise((resolve) => {
    const div = document.createElement('div')
    div.innerHTML = orderInfo
    document.body.appendChild(div)
    document.forms[0].submit()
    resolve()
  })
}

/**
 * 余额支付
 */
function yuePay(res: any) {}

function getWechatCode(): Promise<string> {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (res) => {
        resolve(res.code)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
