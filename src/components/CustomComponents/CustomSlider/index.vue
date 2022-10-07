<template>
  <div>
    <input type="range" />
    <div class="container" ref="container">
      <div class="left" ref="left"></div>
      <div class="knob" ref="knob" id="knob"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";
import useMain from "./hooks/main";

// 滑动按钮的实例
const knob = ref();
// 左侧起点的实例
const left = ref();
// 整个容器的实例
const container = ref();
const props = defineProps({
  sliderValue: {
    type: Object as PropType<number>,
    default: () => {
      return 0;
    },
  },
});
const emits = defineEmits(["update:sliderValue"]);
useMain(emits, knob, left, container, props);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
