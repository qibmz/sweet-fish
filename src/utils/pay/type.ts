export enum PaymentChannel {
  ALIPAY = 'alipay',
  WECHAT = 'weixin',
  YUE = 'yue',
}
export type PayWayList = {
  id: number
  payType: PaymentChannel
  payChannel: string
  payName: string
  icon: string
}[]
