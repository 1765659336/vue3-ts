# 代码示范
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

# 效果演示
<SecondEchartTest></SecondEchartTest>

# 使用文档

## col props

| 参数 | 参数说明               | 数据类型 | 可选值 | 默认值 |
| ---- | ---------------------- | -------- | ------ | ------ |
| span | 栅格占据的列数         | number   | —      | 24     |
| push | 当前栅格右侧间隔       | number   | —      | 0      |
| pull | 当前栅格左侧间隔       | number   | —      | 0      |
| xs   | `<768px` 响应式栅格数  | number   | —      | 0      |
| sm   | `≥768px` 响应式栅格数  | number   | —      | 0      |
| md   | `≥992px` 响应式栅格数  | number   | —      | 0      |
| lg   | `≥1200px` 响应式栅格数 | number   | —      | 0      |
| xl   | `≥1920px` 响应式栅格数 | number   | —      | 0      |

## row props

| 参数    | 参数说明                  | 数据类型 | 可选值                                      | 默认值 |
| ------- | ------------------------- | -------- | ------------------------------------------- | ------ |
| gutter  | 网格间隔                  | number   | —                                           | 0      |
| type    | 布局模式                  | string   | "grid"/"flex"                               | "grid" |
| justify | flex 布局下的水平排列方式 | string   | start/end/center/space-around/space-between | start  |



## col slot

| 插槽 | 参数说明                  |
| ---- | ------------------------- |
| slot | 默认插槽：用来接收row组件 |

## row slot

| 插槽 | 参数说明                   |
| ---- | -------------------------- |
| slot | 默认插槽：用来接收布局内容 |

## methods

| 方法名 | 方法说明 | 方法参数 |
| ------ | -------- | -------- |

## events

| 事件名 | 事件说明 | 回调参数 |
| ------ | -------- | -------- |

## 注意事项

```
使用xs、sm、md、lg、xl。span的优先级没有它们高，会被覆盖，如果当前屏幕宽度对应的变量值未设置，那么就是按照当前屏幕宽度对应的变量坐标开始，按[xs,sm,md,lg,xl]顺序往上找，设置了谁的值，变量值就是多少，如果都没有设置，那么默认就是span的值。span如果没有传，那么默认就是24。
父容器盒子占据屏幕宽度(不包括所有的gutter)的比例为 自己的span([xs,sm,md,lg,xl])+push+pull)   /除以    row下所有col的span([xs,sm,md,lg,xl])+push+pull)
内容区域占据父盒子的宽度比例为 自己的span([xs,sm,md,lg,xl])   /除以   自己的span([xs,sm,md,lg,xl])+push+pull)
```

