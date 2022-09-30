<template>
  <div class="custom-signature-container">
    <canvas ref="cvs" width="500" height="300"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import useBrush from "./hooks/useBrush";
// canvas绘制主体逻辑(下笔收笔)
const cvs = ref();
watch(cvs, function () {
  useBrush(cvs.value);
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
