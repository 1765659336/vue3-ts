<template>
  <div class="custom-signature-container">
    <el-button type="primary" @click="clearCopy">清空</el-button>
    <el-button type="primary" @click="fallbackCopy">回退</el-button>
    <el-button type="primary" @click="downLoadCopy">下载</el-button>
    <el-button type="primary">保存</el-button>
    <canvas ref="cvs" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import useBrush from "./hooks/useBrush";
// canvas绘制主体逻辑(下笔收笔)
const cvs = ref();
const width = "1000";
const height = "500";
const clearCopy = ref();
const downLoadCopy = ref();
const fallbackCopy = ref();
onMounted(() => {
  const { clear, downLoad, fallback } = useBrush(cvs, width, height);
  clearCopy.value = clear;
  downLoadCopy.value = downLoad;
  fallbackCopy.value = fallback;
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
