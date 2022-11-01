<template>
  <CustomSwitch v-model="value"></CustomSwitch>
  {{ value }}
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineOptions({
//   name: "CustomSwitchTest",
// });
const value = ref(false);
</script>

<style scoped lang="less"></style>
