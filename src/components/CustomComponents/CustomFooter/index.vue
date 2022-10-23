<template>
  <div
    class="custom-footer-container"
    :style="{ '--custom-footer-height--': props.height }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CustomFooter",
});
const props = defineProps({
  height: {
    type: String,
    default: () => {
      return "60px";
    },
  },
});
</script>

<style scoped lang="less">
.custom-footer-container {
  height: var(--custom-footer-height--);
  background-color: green;
  width: 100%;
}
</style>
