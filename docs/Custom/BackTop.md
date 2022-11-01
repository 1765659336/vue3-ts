## 基本使用

::: details 点我查看代码
```vue
<template>
  <div class="div">
    <CustomBackTop></CustomBackTop>
    <CustomBackTop :bottom="200" :right="200" :hiddenValue="160"
      ><div class="fast">快</div></CustomBackTop
    >
    <CustomBackTop
      :bottom="150"
      :right="150"
      :hiddenValue="100"
      :animationTime="100"
      ><div class="slow">慢</div></CustomBackTop
    >
  </div>
</template>

<script setup lang="ts">
import CustomBackTop from "../../../../src/components/CustomComponents/CustomBackTop/index.vue";
//   defineOptions({
//     name: "CustomBackTopTest",
//   });
</script>

<style scoped lang="less">
.div {
  height: 600px;
}

.fast {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  background-color: red;
}

.slow {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: green;
}
</style>

```
:::

<CustomBackTopTest></CustomBackTopTest>


## props属性
| 参数   | 参数说明        | 数据类型 | 可选值        | 默认值 |
| ------ | --------------- | -------- | ------------- | ------ |
| bottom  | 固定在bottom多少距离            | Number   | 单位（px） | 0   |
| right | 固定在right多少距离            | Number   | 单位（px） | 0   |
| hiddenValue | 滚动距离少于多少时，隐藏            | Number   | 单位（px） | 0   |
| animationTime | 动画步长            | Number   | 单位（mm） | 5  |

## 插槽

| 插槽名 | 说明                 | 默认值 |
| ------ | -------------------- | ------ |
| -      | 默认插槽，触发的节点 | 无     |

