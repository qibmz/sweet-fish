<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view>
    <OrderList :defaultIndex="defaultIndex" :tabsList="tabsList"></OrderList>
  </view>
</template>

<script lang="ts" setup>
import OrderList from '@/components/order-list/index.vue'
const defaultIndex = ref(0)
const tabsList = ref([
  { name: '全部', type: -6 },
  { name: '待支付', type: 0 },
  { name: '待发货', type: 1 },
  { name: '待收货', type: 2 },
  { name: '已完成', type: 4 },
])

const getBtnList = computed(() => {
  interface Button {
    text: string
    method: () => void
  }

  const buttonConfig: Record<number, Button[]> = {
    0: [
      { text: '取消订单', method: handCancel },
      { text: '去支付', method: handPay },
    ],
    2: [{ text: '确认收货', method: handConfirm }],
  }

  return (state: number) => buttonConfig[state] || []
})

// 取消订单
const handCancel = () => {}
// 确认收货
const handConfirm = () => {}
// 去支付
const handPay = () => {}

const getStatusText = computed(() => {
  return (orderState: number) => {
    return tabsList.value.find((item) => orderState === item.type)?.name ?? ''
  }
})
onLoad((e) => {
  if (e?.type) {
    defaultIndex.value = Number(e.type) ?? 0
  }
})
</script>

<style lang="scss" scoped></style>
