declare const __UNI_PLATFORM__:
  | 'h5'
  | 'app'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-jd'
  | 'mp-kuaishou'
  | 'mp-lark'
  | 'mp-qq'
  | 'mp-toutiao'
  | 'mp-weixin'
  | 'quickapp-webview'
  | 'quickapp-webview-huawei'
  | 'quickapp-webview-union'

declare const __VITE_APP_PROXY__: 'true' | 'false'
// global.d.ts
declare module 'qs' {
  const stringify: (obj: Record<string, any>, options?: any) => string
  const parse: (str: string, options?: any) => Record<string, any>
  export { stringify, parse }
}
declare namespace JSX {
  interface IntrinsicElements {
    template: any
    block: any
  }
}
