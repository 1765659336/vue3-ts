## 基本使用
:::details 点我查看代码
```vue
<template>
  <div
    :style="{
      width: '500px',
    }"
  >
    <CustomTimeline
      timeValue="2020-12-12"
      contentValue="你好呀"
    ></CustomTimeline>
    <CustomTimeline
      timeValue="2020-12-12"
      contentValue="你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你
    好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你
    好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀"
    ></CustomTimeline>
    <CustomTimeline timeValue="2020-12-12">
      插槽内容
      <template #time-value><span> 2022-12-21 </span></template>
    </CustomTimeline>
    <CustomTimeline timeValue="2020-12-12">
      插槽内容
      <template #time-value><span> 2022-12-21 </span></template>
      <template #icon-value
        ><div
          :style="{ width: '12px', height: '12px', backgroundColor: 'pink' }"
        ></div
      ></template>
    </CustomTimeline>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less"></style>

```
:::

<CustomTimelineTest></CustomTimelineTest>