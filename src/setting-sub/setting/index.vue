<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '设置',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mx-20rpx">
    <view v-for="(item, index) in cellList" :key="index" class="mt-20rpx">
      <view class="mb-10rpx"><wd-text :text="item.title" size="24rpx"></wd-text></view>

      <wd-cell
        :title="i.title"
        is-link
        v-for="i in item.list"
        :key="i.title"
        @click="navigateTo(i.to as UrlOptions)"
      />
    </view>
    <view class="mt-40rpx"><wd-cell title="退出登录" is-link @click="handLogout" /></view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { navigateTo, redirectTo, UrlOptions } from '@/utils/navigator'
import { useMessage } from 'wot-design-uni/components/wd-message-box'
const userStore = useUserStore()
const cellList = [
  {
    title: '个人',
    list: [
      {
        title: '个人资料',
        to: '/setting-sub/setting/userInfo',
      },
      {
        title: '地址管理',
        to: '/setting-sub/address/manage/index',
      },
      {
        title: '账号与安全',
        to: '/setting-sub/account/index',
      },
    ],
  },
  {
    title: '隐私',
    list: [
      {
        title: '用户协议',
        to: '/setting-sub/address/manage/index',
      },
      {
        title: '隐私条款',
        to: '/setting-sub/address/manage/index',
      },
      {
        title: '个性化选项',
        to: '/setting-sub/setting/recommend',
      },
    ],
  },
  {
    title: '关于',
    list: [
      {
        title: '关于甜鱼',
        to: '/setting-sub/address/manage/index',
      },
    ],
  },
]
const message = useMessage()

const handLogout = () => {
  message
    .confirm({
      msg: '确定要退出登录吗？',
      confirmButtonProps: {
        customClass: 'bg-#FFD700!',
      },
    })
    .then(() => {
      userStore.clearUserInfo()
      redirectTo('/login-sub/login/index')
    })
}
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped></style>
