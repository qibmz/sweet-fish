<template>
  <view class="pt-30rpx">
    <wd-input v-model="form.account" prefix-icon="user" type="number" placeholder="请输入账号" />
    <wd-input
      v-model="form.password"
      prefix-icon="lock-on"
      show-password
      placeholder="请输入密码"
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
    <wd-button custom-class="mt-50rpx bg-#FFD700!" block @click="handleGetCode">登录</wd-button>
    <view class="mt-40rpx center">
      <text class="text-26rpx" @click="emit('changeLoginType', 'phone')">验证码登录</text>
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
import { navigateTo, switchTab } from '@/utils/navigator'
import { useMessage } from 'wot-design-uni'
import { LoginType } from '../type'
const phone = ref('')
const checked = ref(false)
const message = useMessage('confirm-box')
const form = reactive({
  account: '',
  password: '',
})
const handleGetCode = () => {
  if (checked.value) {
    submitForm()
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
        submitForm()
      })
  }
}
const submitForm = () => {
  switchTab('/pages/index/index')
}
const emit = defineEmits<{
  changeLoginType: [value: LoginType]
}>()
</script>

<style lang="scss" scoped></style>
