<template>
  <CustomBackTop></CustomBackTop>
  <CustomBackTop :bottom="100" :right="100" :hiddenValue="100"
    >快</CustomBackTop
  >
  <CustomBackTop
    :bottom="150"
    :right="150"
    :hiddenValue="100"
    :animationTime="100"
    >慢</CustomBackTop
  >
  <div class="div"></div>
</template>

<script setup lang="ts">
// defineOptions({
//   name: "CustomBackTopTest",
// });
</script>

<style scoped lang="less">
.div {
  height: 120%;
}
</style>
