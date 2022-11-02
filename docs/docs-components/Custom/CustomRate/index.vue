<template>
  <CustomRate v-model:rateValue="value" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value }}
  <CustomRate v-model:rateValue="value2" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value2 }}
  <CustomRate v-model:rateValue="value3" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value3 }}
  <CustomRate v-model:rateValue="value4" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value4 }}
  <CustomRate v-model:rateValue="value5" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value5 }}
  <CustomRate v-model:rateValue="value6" :rateItemNumber="5"></CustomRate>
  评分级别:{{ value6 }}
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref(0);
const value2 = ref(1);
const value3 = ref(2);
const value4 = ref(3);
const value5 = ref(4);
const value6 = ref(5);
</script>

<style scoped lang="less"></style>
