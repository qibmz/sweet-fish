<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '个性化推荐',
    navigationBarBackgroundColor: '#fff',
  },
}
</route>

<template>
  <view class="mt-30rpx">
    <wd-cell-group>
      <wd-cell title="个性化内容推荐" center label="开启后，可以看到更多感兴趣的内容">
        <wd-switch v-model="switchData.recommend" active-color="#FFD700" />
      </wd-cell>
      <wd-cell title="个性化广告推荐" center label="开启后，可以过滤更多不感兴趣的广告">
        <wd-switch v-model="switchData.advertising" active-color="#FFD700" />
      </wd-cell>
    </wd-cell-group>
  </view>
</template>

<script lang="ts" setup>
const switchData = reactive({
  recommend: true,
  advertising: true,
})
//
</script>
<style>
page {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
//
</style>
