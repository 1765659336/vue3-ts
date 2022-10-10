<template>
  <div>
    <input type="range" />
    <div class="container" ref="container">
      <div class="left" ref="left"></div>
      <div class="knob" ref="knob" id="knob"></div>
      <div class="right"></div>
    </div>
    <el-input-number
      v-if="isOpenDigitalModulation"
      :min="0"
      :max="100"
      v-model="elInputNumberValue"
      :step="props.sliderStep"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref, watch } from "vue";
import { ElInputNumber } from "element-plus";
import useMain from "./hooks/main";

// 滑动按钮的实例
const knob = ref();
// 左侧起点的实例
const left = ref();
// 整个容器的实例
const container = ref();
const props = defineProps({
  // 滑块选中的值
  sliderValue: {
    type: Object as PropType<number>,
    default: () => {
      return 0;
    },
  },
  // 步长
  sliderStep: {
    type: Object as PropType<number>,
    default: () => {
      return 1;
    },
    validator(value: number) {
      // 如果是整数，能把100除尽且在[1,100]之间
      return value % 1 === 0 && 100 % value === 0 && value >= 1 && value <= 100;
    },
  },
  // 是否开启数字调节滑块的值
  isOpenDigitalModulation: {
    type: Object as PropType<boolean>,
    default: () => {
      return false;
    },
  },
});
const emits = defineEmits(["update:sliderValue"]);
const { changeSliderValue } = useMain(emits, knob, left, container, props);
const elInputNumberValue = ref(props.sliderValue);
watch(
  () => elInputNumberValue.value,
  (newValue) => {
    // 如果滑块的值从有值变为null空，则将滑块置为起始位置
    if (!newValue) {
      changeSliderValue(0);
    } else {
      changeSliderValue(newValue);
    }
  }
);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
