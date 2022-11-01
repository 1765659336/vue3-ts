<template>
  <div class="custom-signature-container">
    <el-button type="primary" @click="clearCopy">清空</el-button>
    <el-button type="primary" @click="fallbackCopy">回退</el-button>
    <el-button type="primary" @click="downLoadCopy">下载</el-button>
    <el-button type="primary" @click="saveCopy">保存</el-button>
    <canvas
      ref="cvs"
      :width="props.canvasWidth"
      :height="props.canvasHeight"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import useBrush from "./hooks/useBrush";
// defineOptions({
//   name: "/CustomSignature",
// });
const props = defineProps({
  // 画笔的宽度
  lineWidth: {
    type: Object as PropType<number>,
    default: () => {
      return 2;
    },
  },
  // 画笔的颜色
  strokeStyle: {
    type: Object as PropType<string>,
    default: () => {
      return "block";
    },
  },
  // 下载的文件名
  doloadFileName: {
    type: Object as PropType<string>,
    default: () => {
      return "canvas.png";
    },
  },
  // 画布的宽度
  canvasWidth: {
    type: Object as PropType<string>,
    default: () => {
      return "1000";
    },
  },
  // 画布的高度
  canvasHeight: {
    type: Object as PropType<string>,
    default: () => {
      return "500";
    },
  },
});
const emits = defineEmits(["saveCallbackBase", "saveCallbackBlob"]);
// 画布实例
const cvs = ref();
const clearCopy = ref();
const downLoadCopy = ref();
const fallbackCopy = ref();
const saveCopy = ref();
onMounted(() => {
  const { clear, downLoad, fallback, save } = useBrush(
    cvs,
    props,
    emits,
    Number(props.canvasWidth),
    Number(props.canvasHeight)
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
