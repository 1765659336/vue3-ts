## 基本使用
:::details 点我查看代码
```vue
<template>
  <CustomSwitch v-model="value"></CustomSwitch>
  {{ value }}
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref(false);
</script>

<style scoped lang="less"></style>

```
:::

<CustomSwitchTest></CustomSwitchTest>