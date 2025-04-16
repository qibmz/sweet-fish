<template>
  <wd-popup v-model="show" position="bottom">
    <view class="center my-30rpx">
      <text class="text-red text-30rpx">￥</text>
      <text class="text-red text-48rpx">{{ price }}</text>
    </view>

    <wd-password-input
      v-model="inputValue"
      info="密码为 6 位数字"
      :error-info="errorInfo"
      @focus="showKeyboard = true"
    />
    <wd-gap height="400rpx"></wd-gap>
    <wd-number-keyboard
      v-model="inputValue"
      v-model:visible="showKeyboard"
      :maxlength="6"
      @blur="showKeyboard = false"
      :modal="false"
      :hideOnClickOutside="false"
    />
  </wd-popup>
</template>

<script lang="ts" setup>
const inputValue = ref<string>('')
const showKeyboard = ref<boolean>(true)
const show = ref(false)
const errorInfo = ref('')
/**
 * 更新错误信息并重置输入值
 * 当传入的文本参数不为空时，此函数将文本参数赋值给错误信息变量errorInfo，
 * 并清空输入值变量inputValue，用于在界面上显示错误信息并清除用户输入
 * @param {string} text - 要显示的错误信息文本
 */
const changeErrorInfo = (text: string) => {
  if (text !== '') {
    errorInfo.value = text
    inputValue.value = ''
  }
}
const price = ref('')
/**
 * 打开价格显示框
 * 此函数用于将价格显示框设置为可见状态，并根据传入的数据设置价格值
 * 它接受一个对象作为参数，该对象包含一个名为price的属性，表示要显示的价格
 * @param {Object} data - 包含价格信息的对象
 * @param {number} data.price - 要显示的价格数值
 */
const open = (data: { price: string }) => {
  show.value = true
  price.value = data.price
}
const emit = defineEmits<{
  confirm: [value: string]
}>()
watchEffect(() => {
  if (show.value) {
    errorInfo.value = ''
  }
  if (inputValue.value.length === 6) {
    emit('confirm', inputValue.value)
  }
})
defineExpose({
  open,
  changeErrorInfo,
})
</script>

<style lang="scss" scoped>
//
</style>
