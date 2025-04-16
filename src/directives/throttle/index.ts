// c:\Users\ASUS\Desktop\project\unibest-3\src\directives\throttle\index.ts

import type { Directive, DirectiveBinding } from 'vue'
import { throttle as wdThrottle } from 'wot-design-uni/components/common/util'
export type ThrottleFunction = () => void
interface ElWithThrottle extends HTMLElement {
  __vueThrottle__?: ThrottleFunction // 将属性标记为可选
}

export const throttle: Directive = {
  mounted(el: ElWithThrottle, binding: DirectiveBinding<ThrottleFunction>) {
    const { value, modifiers } = binding
    const delay = modifiers.long ? 800 : 200 // 默认900ms，如果使用 .long 修饰符则为500ms

    if (typeof value !== 'function') {
      throw new Error('Expected a function as the directive value')
    }

    // 使用类型断言确保返回值类型匹配
    el.__vueThrottle__ = wdThrottle(value, delay) as ThrottleFunction

    el.addEventListener('click', el.__vueThrottle__)
  },
  unmounted(el: ElWithThrottle) {
    // 清理事件监听器，避免内存泄漏
    if (el.__vueThrottle__) {
      el.removeEventListener('click', el.__vueThrottle__)
      delete el.__vueThrottle__ // 直接删除，类型已标记为可选
    }
  },
}
