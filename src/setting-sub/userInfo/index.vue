<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '编辑资料',
    navigationBarBackgroundColor: '#f5f5f5',
  },
}
</route>

<template>
  <view class="pt-20rpx mx-20rpx">
    <wd-cell-group border>
      <wd-cell title="昵称" value="内容" is-link clickable center />
      <wd-cell title="头像" is-link clickable center>
        <template #default>
          <wd-img
            width="90rpx"
            height="90rpx"
            round
            src="https://s1.aigei.com/src/img/png/c0/c0732d49f3b248e189f3115f9bc972a9.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:lYDoORY4R5ZkE-8k6FNS4Hz8tcc="
          ></wd-img>
        </template>
      </wd-cell>
      <wd-cell title="简介" value="内容" is-link clickable center @click="popupShow = true" />
      <wd-picker :columns="columns" label="性别选择" align-right />
    </wd-cell-group>
  </view>
</template>

<script lang="ts" setup>
const columns = [
  {
    text: '男',
    value: '男',
  },
  {
    text: '女',
    value: '女',
  },
]
const popupShow = ref(false)
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
//
</style>
