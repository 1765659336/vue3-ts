<template>
  <div class="custom-tag-container" v-if="closeIcon" :style="initStyleFun()">
    <slot></slot>
    <span @click="closeFun" v-if="isCanClose" class="custom-tag-close-icon">X</span>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
// defineOptions({
//   name: "/CustomTag",
// });

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  isCanClose: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  type: {
    type: Object as PropType<"premary" | "danger" | "success">,
    default: () => {
      return "premary";
    },
  },
  initStyle: {
    type: Object as PropType<{
      "--custom-color--": String;
      "--custom-backgroundColor--": String;
    }>,
  },
});

const emits = defineEmits(["update:modelValue", "close"]);

const closeIcon = computed({
  get: () => {
    return props.modelValue;
  },
  set: () => {
    emits("update:modelValue", !closeIcon.value);
  },
});

const closeFun = function (e: MouseEvent) {
  closeIcon.value = !closeIcon.value;
  emits("close", e);
};

const initStyleFun = function () {
  return props.initStyle
    ? props.initStyle
    : {
        premary: {
          "--custom-color--": "rgb(142, 206, 22)",
          "--custom-backgroundColor--": "rgba(142, 206, 22, .5)",
        },
        danger: {
          "--custom-color--": "rgb(213, 25, 12)",
          "--custom-backgroundColor--": "rgba(213, 25, 12, 0.5)",
        },
        success: {
          "--custom-color--": "rgb(22, 156, 24)",
          "--custom-backgroundColor--": "rgba(22, 156, 24, 0.5)",
        },
      }[props.type];
};
</script>

<style scoped lang="less">
.custom-tag-container {
  padding: 5px 10px;
  display: inline-block;
  background-color: var(--custom-backgroundColor--);
  color: var(--custom-color--);
  border-radius: 5px;

  .custom-tag-close-icon {
    margin: 0 5px;
    cursor: pointer;
  }
}
</style>
