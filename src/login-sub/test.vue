<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view>
    <!-- <order-list :tabs-list="tabsList"></order-list> -->
    <!-- <pay-popup ref="payPopupRef"></pay-popup> -->
  </view>
</template>

<script lang="ts" setup>
import orderList from '@/components/order-list/index.vue'
import keyboardPopup from '@/components/keyboard-popup/index.vue'
import payPopup from '@/components/pay-popup/index.vue'
const keyboardPopupRef = ref<InstanceType<typeof keyboardPopup>>()
const payPopupRef = ref<InstanceType<typeof payPopup>>()
const tabsList = ref([
  {
    name: '待付款',
    type: 1,
  },
  {
    name: '待发货',
    type: 2,
  },
  {
    name: '待收货',
    type: 3,
  },
  {
    name: '待评价',
    type: 4,
  },
])
</script>

<style></style>
