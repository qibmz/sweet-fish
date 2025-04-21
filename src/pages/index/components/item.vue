<template>
  <view class="bg-white mt-20rpx rounded-30rpx overflow-hidden">
    <wd-img :src="item.image" width="100%" mode="widthFix"></wd-img>
    <view class="py-15rpx px-20rpx">
      <view class="mb-10rpx">
        <wd-text :text="item.title" :lines="2" color="black" size="24rpx">
          <template #prefix>
            <wd-tag type="warning" custom-class="mr-10rpx" plain mark>包邮</wd-tag>
          </template>
        </wd-text>
      </view>
      <wd-text :text="`￥${item.price}`" type="error" size="32rpx" bold></wd-text>
      <wd-text text="200人想要" :bold="false" size="22rpx" custom-class="ml-10rpx"></wd-text>
      <view class="mt-10rpx flex items-center">
        <wd-img
          src="https://s1.aigei.com/src/img/png/c0/c0732d49f3b248e189f3115f9bc972a9.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lYDoORY4R5ZkE-8k6FNS4Hz8tcc="
          width="50rpx"
          height="50rpx"
        ></wd-img>
        <wd-text
          :text="truncateString('卖家666')"
          size="24rpx"
          custom-class="ml-10rpx mr-10rpx"
          :lines="1"
        ></wd-text>
        <wd-tag plain type="warning">卖家信用良好</wd-tag>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { truncateString } from '@/utils'
type Item = {
  title: string
  price: number
  isPostage: boolean
  userName: string
  userAvatar: string
  needPeople: number
  image: string
}

const props = withDefaults(defineProps<{ item: Item }>(), {
  item: {
    title: '',
    price: 0,
    isPostage: false,
    userName: '',
    userAvatar: '',
    needPeople: 0,
  },
})
</script>

<style lang="scss" scoped></style>
