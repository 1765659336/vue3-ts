<template>
  <div class="custom-signature-container">
    <el-button type="primary" @click="clearCopy">清空</el-button>
    <el-button type="primary" @click="fallbackCopy">回退</el-button>
    <el-button type="primary" @click="downLoadCopy">下载</el-button>
    <el-button type="primary" @click="saveCopy">保存</el-button>
    <canvas ref="cvs" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import useBrush from "./hooks/useBrush";
const props = defineProps({
  lineWidth: {
    type: Object as PropType<number>,
    default: () => {
      return 2;
    },
  },
  strokeStyle: {
    type: Object as PropType<string>,
    default: () => {
      return "block";
    },
  },
});
const emits = defineEmits(["saveCallbackBase", "saveCallbackBlob"]);
const cvs = ref();
const width = "1000";
const height = "500";
const clearCopy = ref();
const downLoadCopy = ref();
const fallbackCopy = ref();
const saveCopy = ref();
onMounted(() => {
  const { clear, downLoad, fallback, save } = useBrush(
    cvs,
    props,
    emits,
    Number(width),
    Number(height)
  );
  clearCopy.value = clear;
  downLoadCopy.value = downLoad;
  fallbackCopy.value = fallback;
  saveCopy.value = save;
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
