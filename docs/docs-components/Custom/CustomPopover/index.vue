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
