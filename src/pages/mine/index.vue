<route lang="json5">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '我的',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view style="height: var(--status-bar-height)"></view>
  <view class="header-bg"></view>

  <view class="mx-30rpx relative">
    <view class="absolute z-3 h-660rpx right-0 left-0 center" v-if="userStore.isLogin">
      <wd-button
        type="info"
        custom-class="w-300rpx  "
        plain
        @click="navigateTo('/login-sub/login/index')"
      >
        登录/注册
      </wd-button>
    </view>
    <!-- 顶部卡片 -->
    <view
      class="bg-white rounded-30rpx p-30rpx mt--150rpx"
      :style="{
        filter: userStore.isLogin ? 'blur(3px)' : '',
      }"
    >
      <view class="flex items-center justify-between">
        <view>
          <wd-img
            width="120rpx"
            height="120rpx"
            round
            src="https://s1.aigei.com/src/img/png/c0/c0732d49f3b248e189f3115f9bc972a9.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lYDoORY4R5ZkE-8k6FNS4Hz8tcc="
          ></wd-img>
        </view>
        <view class="flex-1 ml-20rpx">
          <view class="flex items-center">
            <wd-text text="岂不美哉" color="black"></wd-text>
            <wd-icon name="arrow-right" size="30rpx"></wd-icon>
          </view>
          <view class="mt-10rpx">
            <wd-tag mark>牛马值:603</wd-tag>
          </view>
        </view>
        <view class="flex-col center gap-10rpx">
          <wd-icon name="user-talk" size="48rpx"></wd-icon>
          <wd-text text="帮助与客服" color="black" size="22rpx"></wd-text>
        </view>
      </view>
      <wd-gap height="1px" bg-color="#f5f5f5"></wd-gap>
      <wd-grid clickable>
        <wd-grid-item text="我的收藏" use-icon-slot>
          <template #icon>
            <wd-text text="0" color="black" size="42rpx"></wd-text>
          </template>
        </wd-grid-item>
        <wd-grid-item text="我的关注" use-icon-slot>
          <template #icon>
            <wd-text
              text="0"
              color="black"
              size="42rpx"
              @click="navigateTo('/product-sub/attention/index')"
            ></wd-text>
          </template>
        </wd-grid-item>
        <wd-grid-item text="我的动态" use-icon-slot>
          <template #icon>
            <wd-text text="0" color="black" size="42rpx"></wd-text>
          </template>
        </wd-grid-item>
        <wd-grid-item
          text="历史浏览"
          use-icon-slot
          @click="navigateTo('/product-sub/historyView/index')"
        >
          <template #icon>
            <wd-text text="0" color="black" size="42rpx"></wd-text>
          </template>
        </wd-grid-item>
      </wd-grid>
    </view>

    <view
      class="bg-white rounded-30rpx mt-30rpx p-30rpx"
      :style="{
        filter: userStore.isLogin ? 'blur(3px)' : '',
      }"
    >
      <view class="flex items-center">
        <view class="bg-#FFD700 w-3px mr-10rpx h-30rpx"></view>
        <wd-text text="我的交易"></wd-text>
      </view>
      <wd-grid clickable custom-class="mt-10rpx">
        <wd-grid-item icon="picture" text="我发布的" />
        <wd-grid-item icon="picture" text="我卖出的" />
        <wd-grid-item icon="picture" text="我买到的" />
        <wd-grid-item icon="picture" text="待评价" />
      </wd-grid>
    </view>

    <view class="bg-white rounded-30rpx mt-30rpx p-20rpx">
      <swiper indicator-dots circular style="height: 190rpx">
        <swiper-item>
          <wd-grid clickable custom-class="mt-10rpx">
            <wd-grid-item
              icon="setting"
              text="设置"
              @click="navigateTo('/setting-sub/setting/index')"
            />
            <wd-grid-item icon="setting" text="设置" />
            <wd-grid-item icon="setting" text="设置" />
            <wd-grid-item icon="setting" text="设置" />
          </wd-grid>
        </swiper-item>
        <swiper-item>
          <wd-grid clickable custom-class="mt-10rpx">
            <wd-grid-item icon="setting" text="设置" />
            <wd-grid-item icon="setting" text="设置" />
            <wd-grid-item icon="setting" text="设置" />
            <wd-grid-item icon="setting" text="设置" />
          </wd-grid>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { navigateTo } from '@/utils/navigator'
const userStore = useUserStore()
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
.header-bg {
  width: 750rpx;
  height: 300rpx;
  background-image: linear-gradient(40deg, #fbc02d 40%, #ffe344);
  border-bottom-right-radius: 20%;
  border-bottom-left-radius: 20%;
}
</style>
