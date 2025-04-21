<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '编辑资料',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="pt-20rpx mx-20rpx">
    <wd-cell-group border>
      <wd-cell title="昵称" value="内容" is-link clickable center />
      <wd-cell title="头像" is-link clickable center @click="handUpload">
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
    <wd-img-cropper v-model="show" :img-src="src" @confirm="handleConfirm"></wd-img-cropper>
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
const src = ref('')
const show = ref(false)
const handUpload = () => {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths[0]
      src.value = tempFilePaths
      show.value = true
    },
  })
}
function handleConfirm(event: { tempFilePath: string }) {
  const { tempFilePath } = event
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
