## 基本使用

:::details 点我查看代码
```vue
<template>
  <div>
    <CustomSignature
      @saveCallbackBase="saveCallbackBase"
      @saveCallbackBlob="saveCallbackBlob"
      :lineWidth="5"
      strokeStyle="red"
    ></CustomSignature>
  </div>
</template>

<script setup lang="ts">
const saveCallbackBase = function (base: any) {
  console.log(base);
};
const saveCallbackBlob = function (blob: any) {
  console.log(blob);
};
</script>

<style scoped lang="less"></style>

```
:::

<CustomSignature></CustomSignature>