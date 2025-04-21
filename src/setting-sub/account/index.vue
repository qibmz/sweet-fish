<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '账号管理',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mt-30rpx">
    <wd-cell-group>
      <wd-cell title="修改手机号" is-link center>
        <wd-text text="13713674101" mode="phone" format></wd-text>
      </wd-cell>
      <wd-cell
        title="修改登录密码"
        is-link
        center
        @click="navigateTo('/setting-sub/account/changePassword')"
      >
        <wd-text text="等级："></wd-text>
        <wd-text text="中" type="error"></wd-text>
      </wd-cell>
      <wd-cell
        title="实名认证"
        is-link
        center
        @click="navigateTo('/setting-sub/account/realNameAuthentication')"
      >
        <wd-text text="已认证"></wd-text>
      </wd-cell>
    </wd-cell-group>

    <wd-cell
      title="注销账号"
      label="注销账号后无法恢复"
      is-link
      center
      custom-class="mt-30rpx"
      @click="handCancel"
    ></wd-cell>
  </view>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/utils/navigator'
const handCancel = () => {}
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
