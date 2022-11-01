## 基本使用

::: details 点我查看代码
```vue
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

```
:::

<CustomCheckboxTest></CustomCheckboxTest>

## props属性
| 参数               | 参数说明  | 数据类型 | 可选值     | 默认值 |
| ------------------ | --------- | -------- | ---------- | ------ |
| modelValue/v-model | 绑定的值  | Boolean  | true/false | -      |
| label              | label提示 | String   | -          | -      |
| disabled           | 是否禁用  | Boolean  | true/false | false  |