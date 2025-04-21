<route lang="json5" type="home">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <z-paging ref="pagingRef" v-model="listData" @query="getListData">
    <template #top>
      <view style="height: var(--status-bar-height)"></view>
      <view
        class="m-10rpx border-2px border-solid border-black rounded-20rpx py-5rpx pl-20rpx pr-3rpx flex items-center justify-between"
      >
        <wd-text color="black" text="小冰箱" size="28rpx"></wd-text>
        <view class="bg-black px-25rpx py-10rpx rounded-20rpx center">
          <wd-icon name="search" color="white" size="26rpx"></wd-icon>
        </view>
      </view>
      <wd-tabs v-model="tabCurrent" @change="tabsChange">
        <block v-for="item in tabsList" :key="item">
          <wd-tab :title="item"></wd-tab>
        </block>
      </wd-tabs>
    </template>

    <view>
      <fg-waterfall v-model="listData" ref="waterfallRef">
        <template #default="{ item }">
          <Item :item="i" v-for="i in item" />
        </template>
      </fg-waterfall>
    </view>
  </z-paging>
  <view
    class="absolute right-50rpx bottom-150rpx bg-#ffd700 rounded-50% w-100rpx h-100rpx center"
    @click="navigateTo('/product-sub/addSales/index')"
  >
    <wd-icon name="add" size="48rpx"></wd-icon>
  </view>
</template>

<script lang="ts" setup>
import FgWaterfall from '@/components/fg-waterfall/index.vue'
import Item from './components/item.vue'
import { navigateTo } from '@/utils/navigator'
const tabCurrent = ref<number>(0)
const tabsList = ref()
const waterfallRef = ref<InstanceType<typeof FgWaterfall>>()
const getTabsList = () => {
  tabsList.value = ['关注', '推荐', '热门', '最新']
}
const tabsChange = () => {
  waterfallRef.value?.clear()
}
const listData = ref<Record<string, any>[]>([])
const getListData = () => {
  console.log(123)
  pagingRef.value?.complete([
    {
      id: 3701,
      image:
        'https://cdnprod.ea380buy.com/images/b2124ccb-6adc-4eba-ac6f-6c7651031498.jpg?w=800&h=800',
      sliderImage: null,
      title: '小米 米家电水壶2 双层防烫 快速加热 1.7L',
      storeTitle: '小米 米家电水壶2 双层防烫 快速加热 1.7L',
      price: 108,
      otPrice: 109,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 179,
      image: 'product/2024/11-18/f63001ab3064483090661af028fa91f5x6if37ofxx.jpg?w=800&h=800',
      sliderImage: null,
      title:
        '荣事达（Royalstar）养生壶养生杯套装迷你烧水壶煮茶壶家用办公多功能保温杯垫花茶壶开水壶电热水壶 RS-GL06A',
      storeTitle:
        '荣事达（Royalstar）养生壶养生杯套装迷你烧水壶煮茶壶家用办公多功能保温杯垫花茶壶开水壶电热水壶 RS-GL06A',
      price: 259,
      otPrice: 699,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 10659,
      image:
        'https://cdnprod.ea380buy.com/images/c6f67527-ce6e-4c45-af0b-1d447ad69edd.jpg?w=800&h=800',
      sliderImage: null,
      title: '飘柔免洗护发素人参滋养修护180g*2瓶 飘柔护发素 免洗护发素',
      storeTitle: '飘柔免洗护发素人参滋养修护180g*2瓶 飘柔护发素 免洗护发素',
      price: 57,
      otPrice: 57,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 4506,
      image:
        'http://cdnprod.ea380buy.com/images/ca6265bd-569b-438e-a9ac-c016c8d1f870.jpg?w=3333&h=3333',
      sliderImage: null,
      title: '洁柔有芯卷纸 油画Face加厚4层200克卫生纸*10卷 细韧柔滑 环保易降解BJ203-10-1T',
      storeTitle: '洁柔有芯卷纸 油画Face加厚4层200克卫生纸*10卷 细韧柔滑 环保易降解BJ203-10-1T',
      price: 36,
      otPrice: 37,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 3366,
      image:
        'https://cdnprod.ea380buy.com/images/2c3ffd27-6439-423b-b285-9063efdcd9ae.jpg?w=800&h=800',
      sliderImage: null,
      title:
        '【智能烤箱】小米米家智能空气炸烤箱30L超大容量电子+热风多功能烤箱家用 一体多功能家用专业空气炸 智能互联',
      storeTitle:
        '【智能烤箱】小米米家智能空气炸烤箱30L超大容量电子+热风多功能烤箱家用 一体多功能家用专业空气炸 智能互联',
      price: 820,
      otPrice: 839,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 12475,
      image:
        'https://cdnprod.ea380buy.com/images/aa579c39-2d40-4513-b48b-f0e58e6cb068.jpg?w=800&h=800',
      sliderImage: null,
      title:
        '新科Shinco真无线蓝牙耳机 GT19入耳式双耳降噪运动游戏低延迟音乐高音质超长续航适用华为oppo小米vivo 白色',
      storeTitle:
        '新科Shinco真无线蓝牙耳机 GT19入耳式双耳降噪运动游戏低延迟音乐高音质超长续航适用华为oppo小米vivo 白色',
      price: 89,
      otPrice: 116,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 10466,
      image:
        'http://cdnprod.ea380buy.com/images/d9728762-4a94-42c6-bb54-f2325699e7e8.jpg?w=800&h=800',
      sliderImage: null,
      title: '多芬樱花甜香滋养美肤沐浴露1L',
      storeTitle: '多芬樱花甜香滋养美肤沐浴露1L',
      price: 44,
      otPrice: 49,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 9350,
      image:
        'https://cdnprod.ea380buy.com/images/91c75a8b-c125-4a0d-a221-2e041f99a981.jpg?w=800&h=800',
      sliderImage: null,
      title: '蕉下纭际系列女士遮阳帽子太阳帽防晒帽防紫外线空顶帽',
      storeTitle: '蕉下纭际系列女士遮阳帽子太阳帽防晒帽防紫外线空顶帽',
      price: 88,
      otPrice: 119,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 5016,
      image:
        'https://cdnprod.ea380buy.com/images/eed14515-4544-45a9-a703-8d1f065f89db.jpg?w=800&h=800',
      sliderImage: null,
      title: '认养一头牛全脂纯牛奶200ml*12盒 纯奶整箱 一提装',
      storeTitle: '认养一头牛全脂纯牛奶200ml*12盒 纯奶整箱 一提装',
      price: 44,
      otPrice: 47,
      flatPattern: 'flatPattern',
      content: null,
    },
    {
      id: 10396,
      image:
        'https://cdnprod.ea380buy.com/images/f8acf096-ee8c-47e8-a67d-9c04953d19ce.jpg?w=800&h=800',
      sliderImage: null,
      title: '得宝Tempo 天然无香抽纸4包*4层*90抽 亲肤柔韧',
      storeTitle: '得宝Tempo 天然无香抽纸4包*4层*90抽 亲肤柔韧',
      price: 20,
      otPrice: 24,
      flatPattern: 'flatPattern',
      content: null,
    },
  ])
}

const pagingRef = ref<ZPagingInstance>()
onLoad(() => {
  getTabsList()
})
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
:deep(.wd-tabs__line) {
  background-color: black;
}
</style>
