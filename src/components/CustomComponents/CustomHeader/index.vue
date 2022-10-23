<template>
  <div
    class="custom-header-container"
    :style="{ '--custom-header-height--': props.height }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CustomHeader",
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
.custom-header-container {
  height: var(--custom-header-height--);
  background-color: pink;
  width: 100%;
}
</style>
