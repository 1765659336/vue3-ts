<template>
  <div
    class="custom-aside-container"
    :style="{ '--custom-aside-width--': props.width }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CustomAside",
});

const props = defineProps({
  width: {
    type: String,
    default: () => {
      return "300px";
    },
  },
});
</script>

<style scoped lang="less">
.custom-aside-container {
  width: var(--custom-aside-width--);
  background-color: skyblue;
}
</style>
