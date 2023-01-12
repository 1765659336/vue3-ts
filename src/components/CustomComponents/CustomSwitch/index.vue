<template>
  <span v-if="props.textTitle[0]" :class="!inputValue ? 'close' : ''">{{
    props.textTitle[0]
  }}</span>
  <div
    class="custom-switch-container"
    :style="{
      '--justify-content--': `${inputValue ? 'end' : 'start'} `,
      '--background-color--': `${inputValue ? 'green' : 'red'}`,
    }"
    @click="inputValueChange"
  >
    <div class="custom-switch-switch"></div>
  </div>
  <span v-if="props.textTitle[1]" :class="inputValue ? 'open' : ''">{{
    props.textTitle[1]
  }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";
// defineOptions({
//   name: "/CustomSwitch",
// });

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  textTitle: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const emits = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (newValue) => {
    emits("update:modelValue", newValue);
  },
});

const inputValueChange = () => {
  emits("update:modelValue", !inputValue.value);
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
