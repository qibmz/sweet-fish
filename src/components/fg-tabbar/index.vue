<template>
  <wd-tabbar
    fixed
    v-model="tabbarStore.curIdx"
    bordered
    safeAreaInsetBottom
    placeholder
    @change="selectTabBar"
    active-color="#FFD700"
  >
    <block v-for="(item, idx) in tabbarList" :key="item.path">
      <wd-tabbar-item
        v-if="item.iconType === 'wot'"
        :title="item.text"
        :icon="item.icon"
      ></wd-tabbar-item>
      <wd-tabbar-item
        v-else-if="item.iconType === 'unocss' || item.iconType === 'iconfont'"
        :title="item.text"
      >
        <template #icon>
          <view
            h-40rpx
            w-40rpx
            :class="[item.icon, idx === tabbarStore.curIdx ? 'is-active' : 'is-inactive']"
          ></view>
        </template>
      </wd-tabbar-item>
      <wd-tabbar-item :title="item.text" v-if="item.iconType === 'local'">
        <template #icon>
          <image :src="item.selectedIconPath" h-40rpx w-40rpx v-show="idx === tabbarStore.curIdx" />
          <image :src="item.iconPath" h-40rpx w-40rpx v-show="idx !== tabbarStore.curIdx" />
        </template>
      </wd-tabbar-item>
    </block>
  </wd-tabbar>
</template>

<script setup lang="ts">
import { tabBar } from '@/pages.json'
import { tabbarStore } from './tabbar'
/** tabbarList 里面的 path 从 pages.config.ts 得到 */
const tabbarList = tabBar.list.map((item) => ({ ...item, path: `/${item.pagePath}` }))
onShow(() => {
  const pages = getCurrentPages()
  const index = tabbarList.findIndex((item) => pages[pages.length - 1].route === item.pagePath)
  if (index !== -1) tabbarStore.setCurIdx(index)
})
function selectTabBar({ value: index }: { value: number }) {
  const url = tabbarList[index].path
  tabbarStore.setCurIdx(index)
  uni.switchTab({ url })
}
onLoad(() => {
  // 解决原生 tabBar 未隐藏导致有2个 tabBar 的问题
  // #ifdef APP-PLUS | H5
  uni.hideTabBar({
    fail(err) {
      console.log('hideTabBar fail: ', err)
    },
    success(res) {},
  })
  // #endif
})
</script>
