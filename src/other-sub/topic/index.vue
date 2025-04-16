<route lang="json5">
{
  style: {
    navigationBarTitleText: '热区页面',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="relative">
    <wd-navbar :title="data.title" placeholder left-arrow @click-left="navigateBack"></wd-navbar>
    <view
      class="bg-transparent absolute z-3"
      v-for="(item, index) in data.data"
      :key="index"
      @click="navigateTo(item.link as UrlOptions)"
      :style="getImageStyle(item)"
    ></view>
    <wd-img :src="data.img" width="750rpx" mode="widthFix"></wd-img>
  </view>
</template>

<script lang="ts" setup>
import { navigateBack, navigateTo, UrlOptions } from '@/utils/navigator'
import { reactive, onMounted } from 'vue'
interface DragPosition {
  x: number
  y: number
  width: number
  height: number
}

interface Hotpoint {
  name: string
  link: string
  drag_start: DragPosition
  drag_end: DragPosition
}

interface TopicData {
  imgWidth: number
  data: Hotpoint[]
  img: string
  title: string
}
const data = reactive<Partial<TopicData>>({})

onMounted(() => {
  // 假设这里获取数据
  // fetchData()
})

const getImageStyle = (item: {
  drag_start: { x: number; y: number }
  drag_end: { width: number; height: number }
}) => {
  const size = getImageDimension(item.drag_end, data.imgWidth)
  const position = getImageDimension(item.drag_start, data.imgWidth)
  return {
    width: `${size.w}rpx`,
    height: `${size.h}rpx`,
    top: `${position.y}rpx`,
    left: `${position.x}rpx`,
  }
}

const getImageDimension = (
  params: { width?: number; height?: number; x?: number; y?: number },
  imgWidth?: number,
) => {
  const { width = 0, height = 0, x = 0, y = 0 } = params
  console.log(params)
  if (imgWidth && imgWidth > 0) {
    return {
      w: (width * 750) / imgWidth,
      h: (height * 750) / imgWidth,
      x: (x * 750) / imgWidth,
      y: (y * 750) / imgWidth,
    }
  } else {
    return {
      w: 0,
      h: 0,
      x: 0,
      y: 0,
    }
  }
}
</script>

<style lang="scss" scoped></style>
