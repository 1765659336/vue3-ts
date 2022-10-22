<template>
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
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    defalut: () => {
      return false;
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
