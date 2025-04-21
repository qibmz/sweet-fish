<template>
  <view
    class="flex flex-1 flex-row items-start"
    :style="{
      gap: columnGap + 'rpx',
    }"
  >
    <!-- #ifndef APP-NVUE -->
    <template v-if="modelValue.length">
      <view v-for="(item, index) in list" :key="index" class="w-50% overflow-hidden">
        <slot :item="item"></slot>
      </view>
    </template>

    <!-- #endif -->
  </view>
</template>

<script lang="ts" setup>
import { Props } from './type'

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  columnGap: 20,
  columnCount: 2,
})
const emit = defineEmits(['update:modelValue'])
const list = ref<Record<string, any>[][]>([])
const listHeightList = ref<number[]>([])
watch(
  () => props.modelValue,
  async (newVal) => {
    await nextTick()
    if (!list.value.length) {
      for (let index = 0; index < props.columnCount; index++) {
        list.value.push([])
        listHeightList.value.push(0)
      }
    }
    splitData(newVal)
  },
  { immediate: true },
)
// 计算lightHeight的长度 最短的index加入一条
const splitData = (data: Record<string, any>[]) => {
  const startIndex = list.value.reduce((pre, cur) => pre + cur.length, 0)
  data.slice(startIndex).forEach((item) => {
    const index = listHeightList.value.indexOf(Math.min(...listHeightList.value))
    list.value[index].push(item)
    listHeightList.value[index] += getParamsFromUrl(item.image).height
  })
}

const clear = () => {
  list.value = []
  listHeightList.value = []
  emit('update:modelValue', [])
}
// 从oss路径中获取高宽
const getParamsFromUrl = (url: string) => {
  try {
    const paramsString = url.split('?')[1]
    if (!paramsString) {
      return { width: 0, height: 0 }
    }

    const paramsArray = paramsString.split('&')
    const params: { [key: string]: string } = {}

    paramsArray.forEach((param) => {
      const [key, value] = param.split('=')
      params[decodeURIComponent(key)] = decodeURIComponent(value)
    })

    const width = params.w ? parseFloat(params.w) : 0
    const height = params.h ? parseFloat(params.h) : 0

    return { width, height }
  } catch (error) {
    console.error('URL解析失败:', error)
    return { width: 180, height: 180 }
  }
}

defineExpose({
  clear,
})
</script>

<style lang="scss" scoped></style>
