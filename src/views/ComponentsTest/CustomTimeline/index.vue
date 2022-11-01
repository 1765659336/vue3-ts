<template>
  <div
    :style="{
      width: '500px',
    }"
  >
    <CustomTimeLine
      timeValue="2020-12-12"
      contentValue="你好呀"
    ></CustomTimeLine>
    <CustomTimeLine
      timeValue="2020-12-12"
      contentValue="你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你
    好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你
    好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀"
    ></CustomTimeLine>
    <CustomTimeLine timeValue="2020-12-12">
      插槽内容
      <template #time-value><span> 2022-12-21 </span></template>
    </CustomTimeLine>
    <CustomTimeLine timeValue="2020-12-12">
      插槽内容
      <template #time-value><span> 2022-12-21 </span></template>
      <template #icon-value
        ><div
          :style="{ width: '12px', height: '12px', backgroundColor: 'pink' }"
        ></div
      ></template>
    </CustomTimeLine>
  </div>
</template>

<script setup lang="ts">
import CustomTimeLine from "src/components/CustomComponents/CustomTimeLine/index.vue";
// defineOptions({
//   name: "CustomTimelineTest",
// });
</script>

<style scoped lang="less"></style>
