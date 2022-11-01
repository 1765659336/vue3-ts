<template>
  <CustomLink
    v-model:disabled="disabled"
    url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    target="_blank"
    >禁止点击v-model</CustomLink
  >
  <div>disabled的值{{ disabled }}</div>
  <CustomButton @click="fn">改变禁用</CustomButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
const disabled = ref(true);
const fn = function () {
  disabled.value = !disabled.value;
};
</script>

<style scoped lang="less"></style>
