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
  <z-paging ref="pagingRef">
    <template #top>
      <view style="height: var(--status-bar-height)"></view>
      <wd-tabs v-model="tabCurrent">
        <block v-for="item in tabsList" :key="item">
          <wd-tab :title="item"></wd-tab>
        </block>
      </wd-tabs>
    </template>
    <view></view>
  </z-paging>
</template>

<script lang="ts" setup>
const tabCurrent = ref<number>(0)
const tabsList = ref()
const getTabsList = () => {
  tabsList.value = ['关注', '推荐', '热门', '最新']
}

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
