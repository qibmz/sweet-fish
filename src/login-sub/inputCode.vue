<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="px-30rpx">
    <view class="mt-80rpx mb-50rpx">
      <text>已发送验证码至</text>
      <text class="ml-10rpx">{{ phoneNumber }}</text>
    </view>
    <!-- 密码输入框 -->
    <wd-password-input v-model="value" :focused="showKeyboard" @focus="showKeyboard = true" />
    <!-- 数字键盘 -->
    <wd-number-keyboard
      v-model="value"
      v-model:visible="showKeyboard"
      :maxlength="6"
      @blur="showKeyboard = false"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const phoneNumber = ref()
const value = ref('')
const showKeyboard = ref<boolean>(true)

const time = ref<number>(60 * 1000)
onLoad((e) => {
  if (e) {
    if (e.phone) {
      phoneNumber.value = e.phone
    }
  }
})
watch(value, (val) => {
  if (val.length === 6) {
    showKeyboard.value = false
  }
})
//
</script>

<style lang="scss" scoped>
//
</style>
