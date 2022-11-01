## 基本使用
::: details 点我查看代码
```vue
<template>
  <CustomLink>基本使用默认情况</CustomLink>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>

```
:::
<CustomLinkTest></CustomLinkTest>

## 设置主体颜色
::: details 点我查看代码
```vue
<template>
  <CustomLink mainColor="#fc5531">设置主体颜色</CustomLink>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>


```
:::
<CustomLinkTest2></CustomLinkTest2>

## 设置跳转的地址
::: details 点我查看代码
```vue
<template>
  <CustomLink url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    >设置跳转的地址</CustomLink
  >
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>

```
:::
<CustomLinkTest3></CustomLinkTest3>

## 打开新窗口的方式
::: details 点我查看代码
```vue
<template>
  <CustomLink
    url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    target="_blank"
    >设置跳转窗口打开的方式</CustomLink
  >
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>

```
:::
<CustomLinkTest4></CustomLinkTest4>

## 是否禁用
::: details 点我查看代码
```vue
<template>
  <CustomLink
    v-model:disabled="disabled"
    url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    target="_blank"
    >禁止点击v-model</CustomLink
  >
  <div>disabled的值{{ disabled }}</div>
  <CustomButton @click="fn">改变禁用</CustomButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
const disabled = ref(true);
const fn = function () {
  disabled.value = !disabled.value;
};
</script>

<style scoped lang="less"></style>

```
:::
<CustomLinkTest5></CustomLinkTest5>

## 是否打开下划线
::: details 点我查看代码
```vue
<template>
  <CustomLink :openUnderline="false">不开启下划线</CustomLink>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>

```
:::
<CustomLinkTest6></CustomLinkTest6>



## props属性

| 属性名称                  | 说明                | 数据类型 | 可选参数                                                     | 默认值  |
| ------------------------- | ------------------- | -------- | ------------------------------------------------------------ | ------- |
| mainColor                 | 文字颜色            | String   | 符合颜色值规则                                               | -       |
| url                       | 跳转的路径          | String   | -                                                            | ""      |
| target                    | 原生a标签target的值 | String   | [点击查看](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/target) | "_self" |
| disabled/v-model:disabled | 是否禁用            | Boolean  | true/false                                                   | false   |
| openUnderline             | 是否开启下划线      | Boolean  | true/false                                                   | true    |

## method方法

| 方法名        | 说明       | 参数 | 参数说明         |
| ------------- | ---------- | ---- | ---------------- |
| clickCallback | 点击时调用 | e    | 原生点击事件对象 |

