## 基本使用
::: details 点我查看代码
```vue
<template>
  <CustomPopover content="Hello World" title="(reference宽度大于默认最小宽度)">
    <template #reference>
      <div class="div">点我</div>
    </template>
  </CustomPopover>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.div {
  width: 200px;
  height: 20px;
  background-color: red;
}
</style>

```
:::
<CustomPopoverTest></CustomPopoverTest>

:::details 点我查看代码
```vue
<template>
  <CustomPopover content="Hello World" title="(reference宽度小于默认最小宽度)">
    <template #reference>
      <div class="div">点我</div>
    </template>
  </CustomPopover>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.div {
  width: 40px;
  height: 20px;
  background-color: yellow;
}
</style>

```
:::
<CustomPopoverTest2></CustomPopoverTest2>

:::details 点我查看代码
```vue
<template>
  <div class="container">
    <CustomPopover content="Hello World" title="(内容宽度大于默认最小宽度)">
      <template #reference>
        <div class="div">点我</div>
      </template>
      <template #content>
        <div :style="{ width: '500px' }">我是内容</div>
      </template>
    </CustomPopover>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  margin-left: 50px;
  .div {
    width: 200px;
    height: 20px;
    background-color: blue;
  }
}
</style>

```
:::

<CustomPopoverTest3></CustomPopoverTest3>


:::details 点我查看代码
```vue
<template>
  <div class="container">
    <CustomPopover
      content="Hello World"
      title="(内容宽度大于默认最小宽度)"
      trigger="hover"
    >
      <template #reference>
        <div class="div">移入移出</div>
      </template>
      <template #content>
        <div :style="{ width: '500px' }">我是内容</div>
      </template>
    </CustomPopover>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  margin-left: 50px;
  .div {
    width: 200px;
    height: 20px;
    background-color: red;
  }
}
</style>

```
:::

<CustomPopoverTest4></CustomPopoverTest4>
