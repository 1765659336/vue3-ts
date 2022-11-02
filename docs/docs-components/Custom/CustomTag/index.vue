<template>
  <CustomTag>标签</CustomTag>
  <CustomTag v-model="isShow" @close="closeCallback" :isCanClose="isCanClose"
    >标签</CustomTag
  >
  <CustomTag type="danger">标签</CustomTag>
  <CustomTag
    :initStyle="{
      '--custom-color--': 'rgb(236, 233, 9)',
      '--custom-backgroundColor--': 'rgba(236, 233, 9, 0.5)',
    }"
    >标签</CustomTag
  >
</template>

<script setup lang="ts">
import { ref } from "vue";
const isShow = ref(true);
const isCanClose = ref(true);
const closeCallback = function (e: MouseEvent) {
  console.log(e);
};
</script>

<style scoped lang="less"></style>
