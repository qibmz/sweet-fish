<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '修改密码',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mt-20rpx">
    <wd-input label="手机号" v-model="form.phone" placeholder="请输入手机号" type="number">
      <template #suffix>
        <wd-button
          size="small"
          v-model="form.code"
          type="primary"
          custom-class="text-#fff! bg-#FFD700! px-10rpx"
          @click="handGetCode"
        >
          {{ buttonText }}
        </wd-button>
      </template>
    </wd-input>
    <wd-input
      label="验证码"
      placeholder="请输入验证码"
      :maxlength="4"
      custom-class="mt-10rpx"
      type="number"
    ></wd-input>
    <wd-input
      label="输入新密码"
      v-model.trim="form.newPassword"
      placeholder="请输入新密码"
      show-password
      custom-class="mt-10rpx"
    ></wd-input>
    <wd-input
      label="确认新密码"
      v-model.trim="form.confirmPassword"
      show-password
      custom-class="mt-10rpx"
      placeholder="请再次输入新密码"
    ></wd-input>
    <view class="px-20rpx">
      <wd-text
        text="必须是6-20个英文字母,数字或符号(除空格),且字母,数字和标点符号至少包含两种"
        size="24rpx"
      ></wd-text>
      <wd-button block custom-class="bg-#FFD700! text-black! mt-40rpx" @click="handConfirm">
        确定
      </wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { navigateBack } from '@/utils/navigator'

const form = reactive({
  phone: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
})
const { run, buttonText } = useCaptcha(Number(form.phone))
const handGetCode = () => {
  if (!form.phone) {
    return
  }
  run()
}
const handConfirm = () => {
  navigateBack()
}
//
</script>

<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
//
</style>
