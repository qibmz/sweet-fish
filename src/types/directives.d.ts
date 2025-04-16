// c:\Users\ASUS\Desktop\project\unibest-3\src\types\directives.d.ts

import type { Directive, DirectiveBinding } from 'vue'
import type { ThrottleFunction } from '@/directives/'
declare module 'vue' {
  export interface ComponentCustomProperties {
    /**
     * Throttle 指令用于限制事件的触发频率。
     * 使用 `.long` 修饰符可以增加延迟时间。
     *
     * @example
     * ```vue
     * <button v-throttle="handleClick">Click me</button>
     * <button v-throttle.long="handleClick">Click me</button>
     * ```
     *
     * @param value - 绑定的函数，将在事件触发时调用。
     * @param modifiers - 支持的修饰符：
     *   - `.long`: 增加延迟时间为 500ms，默认为 900ms。
     */
    vThrottle: Directive<HTMLElement, ThrottleFunction>
  }
}

export {}
