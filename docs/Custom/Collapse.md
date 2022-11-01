## 基本使用

::: details 点我查看代码
```vue
<template>
  <div class="div">
    <CustomCollapse @click="fn">
      <CustomCollapseItem title="1" lock="lock1">content123</CustomCollapseItem>
      <CustomCollapseItem title="2" lock="lock2">content123</CustomCollapseItem>
      <CustomCollapseItem title="3" lock="lock3">content123</CustomCollapseItem>
    </CustomCollapse>
  </div>
</template>

<script setup lang="ts">
const fn = function (e: MouseEvent, lock: any) {
  console.log("容器", e, lock);
};
</script>

<style scoped lang="less">
.div {
  width: 600px;
  border: 1px solid #ccc;
}
</style>

```
:::
<CustomCollapseTest></CustomCollapseTest>

## 手风琴模式
::: details 点我查看代码
```vue
<template>
  <div class="div">
    <CustomCollapse @click="fn" :accordion="true">
      <CustomCollapseItem title="1" lock="lock1">content123</CustomCollapseItem>
      <CustomCollapseItem title="2" lock="lock2">content123</CustomCollapseItem>
      <CustomCollapseItem title="3" lock="lock3">content123</CustomCollapseItem>
    </CustomCollapse>
  </div>
</template>

<script setup lang="ts">
import CustomCollapse from "../../../../src/components/CustomComponents/CustomCollapse/index.vue";
import CustomCollapseItem from "../../../../src/components/CustomComponents/CustomCollapseItem/index.vue";

const fn = function (e: MouseEvent, lock: any) {
  console.log("容器", e, lock);
};
</script>

<style scoped lang="less">
.div {
  width: 600px;
  border: 1px solid #ccc;
}
</style>

```
:::
<CustomCollapseTest2></CustomCollapseTest2>



## CustomCollapse

## props属性

| 属性名    | 说明               | 数据类型 | 可选参数   | 默认值 |
| --------- | ------------------ | -------- | ---------- | ------ |
| accordion | 是否开启手风琴模式 | Boolean  | true/false | false |
## method事件

| 方法名 | 说明              | 方法参数                 | 参数说明                                                |
| ------ | ----------------- | ------------------------ | ------------------------------------------------------- |
| click  | 点击折叠/展开子项 | e: MouseEvent, lock: any | e原生鼠标事件对象，lockCustomCollapseItem的唯一标识lock |



## slot插槽

| 插槽名 | 插槽说明                             | 默认值 |
| ------ | ------------------------------------ | ------ |
| -      | 默认插槽，只能传入CustomCollapseItem | -      |



## CustomCollapseItem

## props属性

| 属性名 | 说明                                           | 数据类型 | 可选参数 | 默认值 |
| ------ | ---------------------------------------------- | -------- | -------- | ------ |
| title  | 标题                                           | any      | -        | -      |
| lock   | 开启手风琴模式时，CustomCollapseItem的唯一标识 | any      | -        | -      |



## slot插槽

| 插槽名 | 插槽说明                       | 默认值 |
| ------ | ------------------------------ | ------ |
| -      | 默认插槽,折叠面板content的内容 | -      |

