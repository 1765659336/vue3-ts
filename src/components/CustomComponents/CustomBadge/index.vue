<template>
  <div class="custom-badge-container" :style="renderStyle()">
    <div class="custom-badge-icon">
      <slot name="dot">
        <span class="custom-badge-icon-text" :title="modelTitleValue">
          {{ modelValue }}</span
        >
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import useDotValue from "./hooks/useDotValue";
import useStyle from "./hooks/useStyle";

defineOptions({
  name: "CustomBadge",
});

const props = defineProps({
  modelValue: {
    type: Object as PropType<String | Number>,
    default: () => {
      return "";
    },
  },
  fontSize: {
    type: String,
    default: () => {
      return "12px";
    },
  },
  initStyle: {
    type: Object as PropType<{ color: String; backgroundColor: String }>,
    default: () => {
      return {
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(234, 12, 12)",
      };
    },
  },
});

const emits = defineEmits(["update:modelValue"]);

const { dotNumber, modelTitleValue, modelValue } = useDotValue(props, emits);

const { renderStyle } = useStyle(props, dotNumber);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
