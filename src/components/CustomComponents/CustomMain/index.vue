<template>
  <div class="custom-main-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// defineOptions({
//   name: "CustomMain",
// });
</script>

<style scoped lang="less">
.custom-main-container {
  background-color: yellow;
  flex: 1;

}
</style>
