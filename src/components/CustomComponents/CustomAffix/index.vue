<template>
  <div class="custom-affix-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "/CustomAffix",
});
</script>

<style scoped lang="less">
.custom-affix-container {
  position: sticky;
  top: 0;
}
</style>
