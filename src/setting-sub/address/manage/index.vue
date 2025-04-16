<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '地址管理',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mx-20rpx mt-20rpx">
    <wd-cell title="收货地址" is-link @click="navigateTo('/setting-sub/address/list/index')" />
    <wd-cell
      title="退货地址"
      is-link
      @click="navigateTo('/setting-sub/address/list/index', { pageType: 'back' })"
    />
  </view>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/utils/navigator'
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped></style>
