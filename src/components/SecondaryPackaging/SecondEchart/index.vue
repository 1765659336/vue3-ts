<template>
  <div
    ref="Echarts"
    :style="{ width: props.width, height: props.height }"
  ></div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import * as echart from "echarts";
import useMain from "./hooks/useMain";
// defineOptions({
//   name: "/SecondEchart",
// });
const Echarts = ref();
const props = defineProps({
  width: {
    type: String,
    default: () => {
      return "100%";
    },
  },
  height: {
    type: String,
    default: () => {
      return "100%";
    },
  },
  option: {
    type: Object as PropType<any>,
    default: () => {},
  },
});
useMain(echart, Echarts, props);
</script>

<style scoped lang="less"></style>
