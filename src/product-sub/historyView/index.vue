<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '历史浏览',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <z-paging ref="pagingRef">
    <template #top>
      <wd-navbar
        title="历史浏览"
        placeholder
        left-arrow
        @click-left="navigateBack"
        @click-right="handleClear"
        :bordered="false"
      >
        <template #right>
          <wd-text color="black" text="清空"></wd-text>
        </template>
      </wd-navbar>
      <view @click="closeOutside">
        <wd-drop-menu>
          <wd-drop-menu-item
            v-model="dropDownActive"
            :options="dropDownOptions"
            @change="handDropDownChange"
          />
        </wd-drop-menu>
      </view>
    </template>

    <view class="mt-20rpx px-20rpx" v-for="item in 3">
      <wd-text text="2025-04-18" size="24rpx"></wd-text>
      <wd-grid custom-class="mt-10rpx" :gutter="5" :column="3">
        <wd-grid-item icon="picture" use-slot v-for="item in 5">
          <view class="px-20rpx">
            <wd-img
              src="https://asearch.alicdn.com/bao/uploaded/O1CN01mkhkzF1Dcau4pQizw_!!2846300237.jpg"
              width="200rpx"
              height="200rpx"
            ></wd-img>
            <wd-text
              text="1232323232323232323232323232323232323232323"
              size="24rpx"
              :lines="1"
            ></wd-text>
            <wd-text text="￥200" type="error" custom-class="mt-5rpx"></wd-text>
          </view>
        </wd-grid-item>
      </wd-grid>
    </view>
  </z-paging>
</template>

<script lang="ts" setup>
import { navigateBack } from '@/utils/navigator'
import { useMessage, useQueue } from 'wot-design-uni'
const pagingRef = ref<ZPagingInstance>()
const message = useMessage()
const handleClear = () => {
  message
    .confirm({
      msg: '确定要清空足迹记录吗？',
      confirmButtonProps: {
        customClass: 'bg-#FFD700!',
      },
    })
    .then(() => {})
}

const { closeOutside } = useQueue()
const dropDownActive = ref(0)
const dropDownOptions = ref([
  {
    label: '我浏览的',
    value: 0,
  },
  {
    label: '我点赞的',
    value: 1,
  },
  {
    label: '我留言的',
    value: 2,
  },
])
const handDropDownChange = ({ value }: { value: number }) => {
  console.log(value)
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
