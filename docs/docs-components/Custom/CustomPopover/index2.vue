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
