<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '发闲置',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <wd-navbar :bordered="false" custom-style="background-color: transparent !important;">
    <template #left>
      <wd-icon name="close" size="16" color="black" @click="navigateBack"></wd-icon>
      <wd-text text="发闲置" bold custom-class="ml-20rpx" size="32rpx" color="balck"></wd-text>
    </template>
    <template #right>
      <wd-button custom-class="bg-#FFD700! text-black! ">发布</wd-button>
    </template>
  </wd-navbar>
  <view class="bg-white rounded-30rpx mt-30rpx mx-20rpx p-20rpx">
    <wd-upload
      :file-list="fileList"
      image-mode="aspectFill"
      :action="action"
      :limit="9"
      @change="handleChange"
      multiple
    ></wd-upload>
    <wd-textarea
      placeholder="描述一下闲置产品的品牌型号，货品来源等"
      placeholder-class="text-24rpx"
    ></wd-textarea>
  </view>
  <view class="bg-white rounded-30rpx mt-30rpx mx-20rpx p-20rpx">
    <wd-cell-group>
      <wd-cell title="价格" is-link @click="pricePopupShow = true">
        <template #default>
          <wd-text :text="`￥${price || `0.00`}`" type="error" bold></wd-text>
        </template>
      </wd-cell>
      <wd-cell title="发货方式" is-link value="包邮"></wd-cell>
    </wd-cell-group>
  </view>
  <wd-popup position="bottom" v-model="pricePopupShow">
    <view class="px-40rpx py-20rpx">
      <view class="flex items-center justify-between">
        <wd-text text="定价" bold color="black" size="48rpx"></wd-text>
        <wd-button custom-class="bg-#FFD700!" @click="pricePopupShow = false">确定</wd-button>
      </view>
      <view class="mt-30rpx px-200rpx">
        <wd-input
          placeholder="￥请输入定价"
          type="digit"
          center
          custom-class="text-52rpx! font-bold!"
          v-model="price"
        >
          <template #suffix>
            <wd-text text="元" size="36rpx" color="black"></wd-text>
          </template>
        </wd-input>
      </view>
      <view class="center mt-10rpx gap-10rpx">
        <wd-text text="卖闲置以新品价" size="24rpx"></wd-text>
        <wd-text text="6" type="primary" size="34rpx"></wd-text>
        <wd-text text="折更容易售出" size="24rpx"></wd-text>
      </view>
      <view class="px-50rpx mt-20rpx">
        <wd-input
          placeholder="￥0.00"
          type="digit"
          label="原价￥"
          custom-class="bg-gray-1! rounded-30rpx!"
          label-width="100rpx"
          v-model="otPrice"
        ></wd-input>
      </view>

      <view class="mt-40rpx flex justify-between" v-show="!price.length">
        <wd-text text="基础软件服务费" size="24rpx">
          <template #suffix>
            <wd-icon name="help-circle" size="26rpx"></wd-icon>
          </template>
        </wd-text>
        <wd-text text="成交额(含运费)*0.6%" size="24rpx"></wd-text>
      </view>
      <view class="mt-40rpx flex justify-between" v-show="price.length">
        <wd-text text="预估基础软件服务费(0.6%)" size="24rpx">
          <template #suffix>
            <wd-icon name="help-circle" size="26rpx"></wd-icon>
          </template>
        </wd-text>
        <wd-text :text="`￥-${serviceFee}`" size="24rpx"></wd-text>
      </view>
      <view class="mt-10rpx flex justify-between" v-show="price.length">
        <wd-text text="预计到手价(含运费)" size="24rpx" color="black"></wd-text>
        <wd-text :text="`￥${realPrice}`" size="24rpx" color="black"></wd-text>
      </view>
    </view>
    <wd-gap height="150rpx"></wd-gap>
  </wd-popup>
</template>

<script lang="ts" setup>
import { navigateBack } from '@/utils/navigator'
const pricePopupShow = ref(false)
const price = ref('')
const otPrice = ref('')
const serviceFee = computed(() => {
  return Math.ceil(Number(price.value) * 0.006 * 100) / 100
})

const realPrice = computed(() => {
  return Math.ceil((Number(price.value) - serviceFee.value) * 100) / 100
})
//
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
:root,
page {
  --wot-upload-size: 198rpx;
}
//
</style>
