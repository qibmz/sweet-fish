<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的关注',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <z-paging ref="pagingRef" :default-page-size="40">
    <view class="mt-30rpx px-20rpx">
      <view class="flex items-center justify-between">
        <wd-text text="你可能感兴趣的人" size="26rpx"></wd-text>
        <wd-text text="查看更多" size="26rpx">
          <template #suffix>
            <wd-icon name="arrow-right"></wd-icon>
          </template>
        </wd-text>
      </view>
      <scroll-view scroll-x class="mt-30rpx">
        <view class="flex items-center gap-20rpx">
          <view
            class="bg-gray-1 rounded-20rpx center flex-col py-30rpx gap-6rpx px-60rpx"
            v-for="item in 10"
          >
            <wd-img
              src="https://asearch.alicdn.com/bao/uploaded/O1CN01mkhkzF1Dcau4pQizw_!!2846300237.jpg"
              width="100rpx"
              height="100rpx"
              round
            ></wd-img>
            <wd-text :text="truncateString('niumamam', 6)" size="28rpx" color="black"></wd-text>
            <wd-text text="好评率99%" size="22rpx"></wd-text>
            <wd-text text="粉丝数:200" size="22rpx"></wd-text>
            <wd-button size="small" custom-class="bg-#FFD700! text-black! mt-10rpx" icon="add">
              关注
            </wd-button>
          </view>
        </view>
      </scroll-view>
      <view class="flex items-center gap-20rpx justify-between mt-20rpx" v-for="item in 20">
        <wd-img
          src="https://asearch.alicdn.com/bao/uploaded/O1CN01mkhkzF1Dcau4pQizw_!!2846300237.jpg"
          width="100rpx"
          height="100rpx"
          round
        ></wd-img>
        <view class="flex-col flex mt-20rpx flex-1">
          <wd-text text="laodongxxixixixixi" :lines="1" color="black" size="32rpx"></wd-text>
          <wd-text text="这个用户很神秘哦" size="26rpx"></wd-text>
          <wd-text text="粉丝数:100" size="22rpx"></wd-text>
        </view>
        <wd-button type="info" size="small" @click="handCancel">已关注</wd-button>
      </view>
    </view>
  </z-paging>
</template>

<script lang="ts" setup>
import { truncateString } from '@/utils'
import { useMessage } from 'wot-design-uni'
const pagingRef = ref<ZPagingInstance>()
const message = useMessage()
const handCancel = () => {
  message
    .confirm({
      title: '确定取消关注？',
      msg: '取消关注后，你将无法看到TA的动态和动态评论',
      confirmButtonProps: {
        customClass: 'bg-#FFD700!',
      },
    })
    .then(() => {})
}
</script>
<style>
page {
  background-color: #fff;
}
</style>
<style lang="scss" scoped>
/* 隐藏滚动条（适用于微信小程序） */
scroll-view {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
}

scroll-view::-webkit-scrollbar {
  display: none; /* Chrome, Safari 和 Opera */
}
</style>
