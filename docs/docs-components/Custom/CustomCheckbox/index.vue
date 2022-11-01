<template>
  <CustomCheckbox v-model="isCheckout" label="复选框" :disabled="false" />
  <div>绑定的值:{{ isCheckout }}</div>
  <CustomButtom @click="btn">按钮</CustomButtom>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isCheckout = ref(true);
const btn = function () {
  isCheckout.value = !isCheckout.value;
};
</script>

<style scoped></style>
