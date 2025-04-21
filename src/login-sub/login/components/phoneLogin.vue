<template>
  <view>
    <view class="text-22rpx text-#999999 mb-10rpx">未注册手机验证后完成注册</view>
    <wd-input
      v-model="phone"
      prefix-icon="phone"
      type="number"
      :maxlength="11"
      placeholder="请输入手机号"
    />
    <view class="mt-20rpx text-26rpx">
      <wd-checkbox v-model="checked" checked-color="#FFD700">
        <view class="flex items-center text-26rpx">
          登录即表明同意
          <text class="text-#FFD700!">《用户协议》</text>
          和
          <text class="text-#FFD700!">《隐私条款》</text>
        </view>
      </wd-checkbox>
    </view>
    <wd-button custom-class="mt-50rpx bg-#FFD700!" block @click="handleGetCode">
      获取验证码
    </wd-button>
    <view class="mt-40rpx center">
      <text class="text-26rpx" @click="emit('changeLoginType', 'password')">密码登录</text>
    </view>
    <wd-message-box selector="confirm-box">
      <view class="text-26rpx bg-white">
        <view>
          <text class="text-#FFD700!">《用户协议》</text>
          和
          <text class="text-#FFD700!">《隐私条款》</text>
        </view>
      </view>
    </wd-message-box>
  </view>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/utils/navigator'
import { useMessage } from 'wot-design-uni'
import { LoginType } from '../type'
const phone = ref('')
const checked = ref(false)
const message = useMessage('confirm-box')
const handleGetCode = () => {
  if (checked.value) {
    navigateTo('/login-sub/inputCode', { phone: phone.value })
  } else {
    message
      .alert({
        title: '登录即表明同意',
        confirmButtonText: '同意并继续',
        confirmButtonProps: {
          customClass: 'bg-#FFD700!',
        },
      })
      .then(() => {
        navigateTo('/login-sub/inputCode', { phone: phone.value })
      })
  }
}
const emit = defineEmits<{
  changeLoginType: [value: LoginType]
}>()
</script>

<style lang="scss" scoped></style>
