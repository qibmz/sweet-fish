import { getUserSendCode } from '@/service/app'
import { ref, computed, onUnmounted } from 'vue'

/**
 * useCaptcha 是一个定制化的请求钩子，用于处理获取验证码。
 * @param phoneNumber 手机号
 * @param initialCountdown 初始倒计时秒数，默认为60秒
 * @returns 返回一个对象{loading, error, run, buttonText}，包含请求的加载状态、错误信息、手动触发请求的函数和按钮文字。
 */
export function useCaptcha(phoneNumber: number, initialCountdown: number = 60) {
  const loading = ref(false)
  const error = ref(false)
  const countdown = ref(initialCountdown)
  const timer = ref<number | null>(null)

  const buttonText = computed(() => {
    if (loading.value) {
      return `发送中...`
    } else if (error.value) {
      return '重新发送'
    } else if (countdown.value > 0 && timer.value !== null) {
      return `${countdown.value}秒后重新发送`
    } else {
      return '获取验证码'
    }
  })

  const run = async () => {
    if (loading.value || (countdown.value > 0 && timer.value !== null)) return
    uni.showLoading({
      title: '发送中...',
      mask: true,
    })
    loading.value = true
    error.value = false
    try {
      // await getUserSendCode({
      //   params: {
      //     phone: phoneNumber,
      //   },
      // })
      countdown.value = initialCountdown
      startCountdown()
    } catch (err) {
      console.error('Failed to fetch captcha:', err)
      error.value = true
    } finally {
      loading.value = false
      uni.hideLoading()
    }
  }

  const startCountdown = () => {
    if (timer.value) {
      clearInterval(timer.value)
    }
    timer.value = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--
      } else {
        clearInterval(timer.value!)
        timer.value = null
      }
    }, 1000)
  }

  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value)
    }
  })

  return { loading, error, run, buttonText }
}
