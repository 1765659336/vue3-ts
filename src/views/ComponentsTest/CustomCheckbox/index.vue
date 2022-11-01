<template>
  <CustomCheckbox
    v-model="isCheckout"
    label="复选框"
    :disabled="false"
  />
  {{ isCheckout }}
  <CustomButtom @click="btn">按钮</CustomButtom>
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineOptions({
//   name: "CustomCheckboxTest",
// });

const isCheckout = ref(true);
const btn = function () {
  isCheckout.value = !isCheckout.value;
};
</script>

<style scoped></style>
