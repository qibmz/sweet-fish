<template>
  <z-paging-swiper>
    <template #top>
      <!-- 顶部tab栏·订单类型 -->
      <wd-tabs v-model="tabCurrent">
        <block v-for="tab in tabsList" :key="tab.name">
          <wd-tab :title="tab.name"></wd-tab>
        </block>
      </wd-tabs>
    </template>
    <!-- 订单列表 -->
    <swiper class="swiper" :current="tabCurrent" @animationfinish="swiperAnimationfinish">
      <swiper-item class="swiper-item" v-for="(item, index) in tabsList" :key="index">
        <z-paging-swiper-item
          :ref="(el: ZPagingInstance) => (pagingRef[index] = el)"
          @query="queryList"
          @updateList="updateList"
          :fixed="false"
          v-if="index === tabCurrent"
          :empty-view-center="false"
        >
          <slot name="content" :order="item"></slot>
        </z-paging-swiper-item>
      </swiper-item>
    </swiper>
  </z-paging-swiper>
</template>

<script lang="ts" setup>
import { getOrderList, OrderDetailResponse } from '@/service/app'
import { SwiperOnAnimationfinishEvent } from '@uni-helper/uni-types/index'

const props = defineProps({
  tabsList: {
    type: Array as PropType<
      {
        name: string
        type: number
      }[]
    >,
    required: true,
  },
  defaultIndex: {
    type: Number,
    default: 0,
  },
})
/** tab列表 */
const tabsList = computed(() => props.tabsList)
const tabCurrent = ref(0)
onMounted(() => {
  tabCurrent.value = props.defaultIndex
})
/** swiper左右滑动，切换tab的index */
const swiperAnimationfinish = (e: SwiperOnAnimationfinishEvent) => {
  tabCurrent.value = e.detail.current
}

const pagingRef = ref<ZPagingInstance[]>([])
const orderList = ref<OrderDetailResponse[][]>(
  Array.from({ length: tabsList.value.length }, () => [] as OrderDetailResponse[]),
)
/** 查询订单 */
const queryList = (page: number, limit: number) => {
  uni.showLoading({ mask: true })
  const type = tabsList.value[tabCurrent.value].type
  getOrderList({
    params: {
      page,
      limit,
      type,
    },
  })
    .then((res) => {
      nextTick(() => {
        pagingRef.value[tabCurrent.value].complete(res.data?.list ?? [])
      })
    })
    .catch(() => {
      nextTick(() => {
        pagingRef.value[tabCurrent.value].complete(false)
      })
    })
    .finally(() => {
      uni.hideLoading()
    })
}

/** 更新订单列表 */
const updateList = (data: OrderDetailResponse[]) => {
  console.log()
  orderList.value[tabCurrent.value] = data
}

defineOptions({
  name: 'order-list',
})
</script>

<style lang="scss" scoped>
//
</style>
