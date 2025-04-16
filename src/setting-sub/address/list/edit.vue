<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '收货地址编辑',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mx-20rpx pt-20rpx">
    <wd-form ref="formRef" :model="form">
      <wd-cell-group border>
        <wd-input
          label="联系人"
          label-width="100px"
          prop="name"
          clearable
          v-model="form.name"
          placeholder="请输入联系人"
          :rules="[{ required: true, message: '请填写联系人' }]"
        />
      </wd-cell-group>
      <wd-cell-group border>
        <wd-input
          label="手机号"
          label-width="100px"
          prop="phone"
          clearable
          type="number"
          v-model="form.phone"
          placeholder="请输入手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            {
              required: true,
              pattern: /^1[3456789]\d{9}$/,
              message: '请输入正确的手机号',
            },
          ]"
        ></wd-input>
      </wd-cell-group>
      <wd-cell-group border>
        <wd-col-picker
          label="所在地区"
          label-width="100px"
          prop="area"
          :rules="[{ required: true, message: '请选择所在地区' }]"
          v-model="form.area"
          :columns="area"
          :column-change="columnChange"
          placeholder="请选择所在地区"
        ></wd-col-picker>
      </wd-cell-group>
      <wd-cell-group border>
        <wd-textarea
          label="详细地址"
          label-width="100px"
          prop="address"
          clearable
          v-model="form.address"
          placeholder="请输入详细地址"
          :rules="[{ required: true, message: '请填写详细地址' }]"
          auto-height
        />
      </wd-cell-group>
    </wd-form>
  </view>
  <view class="fixed bottom-40rpx left-20rpx right-20rpx">
    <wd-button custom-class=" bg-#FAA21E!" @click="handleSubmit" block>保存</wd-button>
  </view>
</template>

<script lang="ts" setup>
import { useColPickerData } from '@/hooks/useColPickerData'
import { ColPickerColumnChangeOption } from 'wot-design-uni/components/wd-col-picker/types'

import { FormInstance } from 'wot-design-uni/components/wd-form/types'
onLoad((e) => {
  if (e) {
    const isBack = e.pageType === 'back'
    const title = e.id
      ? isBack
        ? '编辑退货地址'
        : '编辑收货地址'
      : isBack
        ? '新增退货地址'
        : '新增收货地址'
    uni.setNavigationBarTitle({
      title,
    })
  }
})
const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  phone: '',
  area: [],
  address: '',
})

const { colPickerData, findChildrenByCode } = useColPickerData()
const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
    }
  }),
])
const columnChange = ({ selectedItem, resolve, finish }: ColPickerColumnChangeOption) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text,
        }
      }),
    )
  } else {
    finish()
  }
}
const handleSubmit = () => {
  formRef.value
    ?.validate()
    .then(({ valid, errors }) => {
      if (valid) {
        console.log(form)
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
//
</style>
