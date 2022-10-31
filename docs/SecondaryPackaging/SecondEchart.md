

## 基本使用

通过width属性和height属性来控制整个echart图占据的大小，默认值为100%，自适应父容器。通过option将原本echart配置项传入。

::: details 点我查看代码
```vue{2}
<template>
  <SecondEchart width="900px" height="300px" :option="option"></SecondEchart>
</template>

<script setup lang="ts">
import SecondEchart from "../../src/components/SecondaryPackaging/SecondEchart/index.vue";
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
```
:::

<SecondEchartTest></SecondEchartTest>

## props属性

| 参数   | 参数说明        | 数据类型 | 可选值        | 默认值 |
| ------ | --------------- | -------- | ------------- | ------ |
| width  | 宽度            | String   | 单位（px，%） | 100%   |
| height | 高度            | String   | 单位（px，%） | 100%   |
| option | echarts配置对象 | Object   | -             | {}     |

