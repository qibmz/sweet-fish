<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的收货地址',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <z-paging ref="pagingRef" v-model="addressList" @query="getAddressList" hide-no-more-inside>
    <view class="mx-20rpx mt-20rpx">
      <view
        v-for="item in addressList"
        :key="item.id"
        class="bg-white rounded-20rpx p-20rpx mt-15rpx"
      >
        <view class="flex items-center justify-between">
          <view class="bg-amber-100 rounded-50% p-15rpx w-40rpx h-40rpx center">
            <text class="text-amber">{{ getFirstName(item.name) }}</text>
          </view>
          <view class="flex-col mx-20rpx flex-1">
            <view class="flex-row items-center">
              <text class="text-#333333 text-28rpx">{{ item.name }}</text>
              <text class="text-#333333 text-24rpx mx-10rpx">{{ item.phone }}</text>
              <wd-tag plain bg-color="#FFD700" color="#FFD700" v-if="item.isDefault">默认</wd-tag>
            </view>
            <view class="text-#999999 text-22rpx mt-10rpx">{{ item.address }}</view>
          </view>
          <view @click="navigateTo('/setting-sub/address/list/edit', { id: item.id, pageType })">
            <wd-icon name="edit" size="36rpx" color="#999999"></wd-icon>
          </view>
        </view>

        <view v-show="isEdit" class="mt-15rpx">
          <wd-gap height="1px" bg-color="#f5f5f5"></wd-gap>
          <view class="flex items-center justify-between mt-15rpx">
            <view class="flex items-center">
              <wd-checkbox
                checked-color="#FFD700"
                v-model="item.isDefault"
                custom-label-class="text-22rpx! text-#999999!"
                @change="changeDefault(item.id)"
              >
                设为默认
              </wd-checkbox>
            </view>
            <view @click="handleDelete(item.id)">
              <wd-icon name="delete" color="#999999" size="26rpx"></wd-icon>
              <wd-text text="删除" size="26rpx"></wd-text>
            </view>
          </view>
        </view>
      </view>
      <wd-gap height="200rpx"></wd-gap>
    </view>
    <template #bottom>
      <view class="pt-15rpx px-30rpx bg-white pb-40rpx flex items-center gap-20rpx">
        <wd-button type="info" @click="handleMange">
          {{ isEdit ? '退出管理' : '管理' }}
        </wd-button>
        <wd-button
          custom-class="flex-1 bg-#FFD700!"
          icon="add"
          @click="navigateTo('/setting-sub/address/list/edit')"
        >
          {{ pageType === 'back' ? '新增退货地址' : '新增收货地址' }}
        </wd-button>
      </view>
    </template>
  </z-paging>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/utils/navigator'
import { useMessage } from 'wot-design-uni/components/wd-message-box'

const addressList = ref()
const pagingRef = ref<ZPagingInstance>()
const getFirstName = (name: string) => {
  return name.split('')[0]
}
const pageType = ref<'back' | 'front'>('back')
onLoad((e) => {
  if (e) {
    pageType.value = e.pageType

    if (e.pageType === 'back') {
      uni.setNavigationBarTitle({
        title: '我的退货地址',
      })
    } else {
      uni.setNavigationBarTitle({
        title: '我的收货地址',
      })
    }
  }
})
const getAddressList = async (page: number, limit: number) => {
  pagingRef.value?.complete([
    {
      id: 1,
      name: '张三',
      phone: '13888888888',
      address: '珠海大道南侧65号 广东科学技术职业学院珠海大道南侧65号 广东科学技术职业学院',
      isDefault: true,
    },
    {
      id: 2,
      name: '李四',
      phone: '13888888888',
      address: '广东省深圳市南山区',
      isDefault: false,
    },
    {
      id: 3,
      name: '王五',
      phone: '13888888888',
      address: '广东省深圳市南山区',
      isDefault: false,
    },
    {
      id: 4,
      name: '赵六',
      phone: '13888888888',
      address: '广东省深圳市南山区',
      isDefault: false,
    },
  ])
}
// 管理状态
const isEdit = ref(false)
const handleMange = () => {
  isEdit.value = !isEdit.value
}
const changeDefault = (id: number) => {
  addressList.value.forEach((item) => {
    item.isDefault = item.id === id
  })
}
const message = useMessage()
const handleDelete = (id: number) => {
  message
    .confirm({
      msg: '确定要删除该地址吗？',
      confirmButtonText: '删除',
      confirmButtonProps: {
        customClass: 'bg-#FFD700!',
      },
    })
    .then(() => {
      console.log('点击了确定按钮')
    })
}
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped></style>
