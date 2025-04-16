<template>
  <view>
    <wd-popup
      v-model="popupShow"
      position="bottom"
      closable
      custom-style="border-radius:32rpx 32rpx 0 0;"
    >
      <view class="px-32rpx pt-40rpx bg-#F5F5F5">
        <view class="center mx-20rpx font-bold"><text>收银台</text></view>
        <view class="center">
          <text class="text-32rpx">￥</text>
          <text class="text-75rpx">
            {{ priceInfo?.payFee?.toFixed(2) ?? 0 }}
          </text>
        </view>
        <view class="mt-44rpx">
          <text class="text-28rpx">请选择支付方式</text>
        </view>
        <view class="mt-24rpx bg-white p-20rpx rounded-20rpx">
          <wd-radio-group v-model="payType" size="large" shape="dot">
            <wd-radio :value="1" v-for="(item, idx) in priceInfo?.payWayList" :key="idx">
              <wd-img width="49rpx" height="49rpx" :src="systemStore.getPicUrl(item.icon)"></wd-img>
              <text>{{ item }}</text>
            </wd-radio>
          </wd-radio-group>
        </view>
        <view class="mt-50rpx px-64rpx mb-50rpx">
          <wd-button block type="warning" size="large" @click="handPay()">确认支付</wd-button>
        </view>
      </view>
    </wd-popup>
    <keyboard-popup ref="keyboardPopupRef" @confirm="passwordInputConfirm"></keyboard-popup>
  </view>
</template>

<script lang="ts" setup>
import { CreateOrderRequest, OrderInfoVo, postOrderCreate } from '@/service/app'
import { useSystemStore } from '@/store/system'
import { PaymentChannel, PayWayList } from '@/utils/pay/type'
import { throttle } from 'wot-design-uni/components/common/util'
import keyboardPopup from '@/components/keyboard-popup/index.vue'
import { useUserStore } from '@/store'
type OrderInfo = Omit<OrderInfoVo, 'payWayList'> & {
  payWayList: PayWayList
  mark?: string
  preOrderNo: string
}
const keyboardPopupRef = ref<InstanceType<typeof keyboardPopup>>()
const systemStore = useSystemStore()
const userStore = useUserStore()
const popupShow = ref(true)
const priceInfo = ref<OrderInfo>()
const open = (data: { priceInfo: OrderInfo; mask?: string }) => {
  priceInfo.value = data.priceInfo
  payType.value = data.priceInfo.payWayList[0].payType
  popupShow.value = true
}
const payType = ref<PaymentChannel>()
defineExpose({ open })
const passwordInputConfirm = () => {}
const handPay = throttle((e: Event) => {
  const payWay = priceInfo.value?.payWayList.find((item) => item.payType === payType.value)
  if (payType.value === PaymentChannel.YUE) {
    // 余额支付
    if (userStore.userInfo.payPasswordIsMissing) {
      // 未设置支付密码
      console.log(123)
      return
    }
    keyboardPopupRef.value?.open({
      price: priceInfo.value?.payFee?.toFixed(2) ?? '',
    })
  } else {
    createOrder({
      payWayId: payWay?.id ?? 0,
      preOrderNo: priceInfo.value?.preOrderNo ?? '',
      mark: priceInfo.value?.mark ?? '',
    })
  }
}, 800)
const createOrder = (body: CreateOrderRequest) => {
  return new Promise((resolve, reject) => {
    postOrderCreate({
      body,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
</script>

<style lang="scss" scoped></style>
