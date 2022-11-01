## 基本使用

::: details 点我查看代码
```vue
<template>
  <CustomCantainer>
    <CustomAside>Aside</CustomAside>
    <CustomMain>Main</CustomMain>
  </CustomCantainer>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>

```
:::

<CustomCantainerTest1></CustomCantainerTest1>

## 包含头部和底部

::: details 点我查看代码
```vue
<template>
    <CustomCantainer>
      <CustomHeader>Header</CustomHeader>
      <CustomAside>Aside</CustomAside>
      <CustomMain>Main</CustomMain>
      <CustomFooter>Footer</CustomFooter>
    </CustomCantainer>
  </template>
  
<script setup lang="ts"></script>

<style scoped lang="less"></style>
```
:::

<CustomCantainerTest2></CustomCantainerTest2>

## CustomCantainer
## slot插槽

| 插槽名 | 说明                                                                       | 默认值 |
| ------ | -------------------------------------------------------------------------- | ------ |
| -      | 默认插槽，里面只能传入CustomHeader,CustomAside,CustomMain,CustomFooter组件 | 无     |

## CustomHeader
## slot插槽

| 插槽名 | 说明                                                                       | 默认值 |
| ------ | -------------------------------------------------------------------------- | ------ |
| -      | 默认插槽，里面只能传入CustomHeader,CustomAside,CustomMain,CustomFooter组件 | 无     |

## CustomAside
## slot插槽

| 插槽名 | 说明                                                                        | 默认值 |
| ------ | --------------------------------------------------------------------------- | ------ |
| -      | 默认插槽，里面只能传入CustomHeader,CustomAside,CustomMain，CustomFooter组件 | 无     |

## CustomMain
## slot插槽

| 插槽名 | 说明                                                                       | 默认值 |
| ------ | -------------------------------------------------------------------------- | ------ |
| -      | 默认插槽，里面只能传入CustomHeader,CustomAside,CustomMain,CustomFooter组件 | 无     |

## CustomFooter
## slot插槽

| 插槽名 | 说明                                                                       | 默认值 |
| ------ | -------------------------------------------------------------------------- | ------ |
| -      | 默认插槽，里面只能传入CustomHeader,CustomAside,CustomMain,CustomFooter组件 | 无     |