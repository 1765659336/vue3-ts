<template>
  <button
    :type="nativeType"
    :class="buttonClassArr"
    @click="handleClick"
    :autofocus="autofocus"
    v-loading="props.loading"
  >
    <!-- 当默认插槽传递了内容时，再渲染span标签。否则就不渲染 -->
    <span v-if="currentInstance.slots.default"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive } from "vue";

const props = defineProps({
  // 按钮类型
  type: {
    type: String,
    default: "default",
  },
  // 按钮的尺寸
  size: String,
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String,
    default: "button",
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click"]);

const currentInstance = getCurrentInstance();

const handleClick = function (e: PointerEvent) {
  emits("click", e);
};
const buttonClassArr = reactive([
  "custom-button",
  `custom-button-${props.type}`,
  `${props.size ? "custom-button-" + `${props.size}` : ""}`,
  {
    "is-plain": props.plain,
    "is-round": props.round,
    "is-circle": props.circle,
    "is-loading": props.loading,
    "is-disabled": props.disabled,
  },
]);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
