<template>
  <el-rate v-model="value" :colors="colors" />
  element-plus-rate:{{ value }}
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
import { ElRate } from "element-plus";
import CustomRate from "src/components/CustomComponents/CustomRate/index.vue";
import { ref } from "vue";
defineOptions({
  name: "CustomRateTest",
});
const value = ref(0);
const value2 = ref(1);
const value3 = ref(2);
const value4 = ref(0);
const value5 = ref(0);
const value6 = ref(5);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]); // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped lang="less"></style>
