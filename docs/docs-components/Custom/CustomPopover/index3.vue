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
