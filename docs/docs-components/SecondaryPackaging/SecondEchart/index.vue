<template>
  <SecondEchart width="900px" height="300px" :option="option"></SecondEchart>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const option = reactive({
  xAxis: {
    type: "category",
    data: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
  tooltip: { trigger: "axis" },
  yAxis: { type: "value" },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
      type: "line",
      smooth: true,
    },
  ],
});
</script>

<style scoped lang="less"></style>
