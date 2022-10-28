<template>
  <div class="custom-rate-container" @mouseleave="containerMouseLeave">
    <slot>
      <div
        v-for="(item, index) in props.rateItemNumber"
        :key="item"
        :class="classArr[index]"
        @mouseenter="mouseEnter(index)"
        @mouseleave="mouseLeave(index)"
        @click="mouseClick(index)"
      ></div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import useInit from "./hooks/useInit";
import useOperation from "./hooks/useOperation";
defineOptions({
  name: "/CustomRate",
});
const props = defineProps({
  // 评分的值
  rateValue: {
    type: Number,
    default: () => {
      return 1;
    },
    require: true,
  },
  // 评分共有几个评级
  rateItemNumber: {
    type: Number,
    defalut: () => {
      return 1;
    },
    require: true,
  },
});
const emits = defineEmits(["update:rateValue"]);
const { classArr, mouseEnter, mouseLeave, mouseClick, containerMouseLeave } =
  useOperation(props, emits);
useInit(props, classArr);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
