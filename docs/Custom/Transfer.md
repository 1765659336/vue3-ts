## 基本使用
:::details 点我查看代码
```vue
<template>
  <CustomTransfer v-model:transferValue="value" :data="data"></CustomTransfer>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Option {
  key: number;
  label: string;
  disabled: boolean;
}

const generateData = () => {
  const data: Option[] = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref<Option[]>(generateData());
const value = ref([]);
</script>

<style scoped lang="less"></style>

```
:::

<CustomTransferTest></CustomTransferTest>