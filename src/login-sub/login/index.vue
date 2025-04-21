<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '登录/注册',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <wd-img
    :src="LoginTopBg"
    width="730rpx"
    height="650rpx"
    custom-class="absolute! top-0 z--1 right-0"
  ></wd-img>
  <wd-navbar :bordered="false" custom-style="background-color: transparent !important;">
    <template #left>
      <wd-icon name="close" size="16" color="black" @click="navigateBack"></wd-icon>
    </template>
  </wd-navbar>

  <view class="mt-280rpx px-24rpx relative z-10">
    <view class="flex-col flex gap-10rpx">
      <text class="text-48rpx font-bold">登陆后更精彩</text>
      <text class="text-#333333 text-28rpx">这也能卖出去</text>
    </view>
    <view class="mt-80rpx">
      <component :is="inputComponent" @changeLoginType="changeLoginType" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { navigateBack } from '@/utils/navigator'
import LoginTopBg from './static/login-top.png'
import { LoginType } from './type'

const PhoneLogin = defineAsyncComponent(() => import('./components/phoneLogin.vue'))
const PasswordLogin = defineAsyncComponent(() => import('./components/passwordLogin.vue'))
const loginType = ref<LoginType>('phone')
const inputComponent = computed(() => {
  return loginType.value === 'phone' ? PhoneLogin : PasswordLogin
})
const changeLoginType = (type: LoginType) => {
  loginType.value = type
}
</script>

<style lang="scss" scoped></style>
