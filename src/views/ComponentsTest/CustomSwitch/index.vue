<template>
  <CustomSwitch v-model="value"></CustomSwitch>
  {{ value }}
</template>

<script setup lang="ts">
import CustomSwitch from "src/components/CustomComponents/CustomSwitch/index.vue";
import { ref } from "vue";
defineOptions({
  name: "CustomSwitchTest",
});
const value = ref(false);
</script>

<style scoped lang="less"></style>
