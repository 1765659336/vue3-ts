## 基本使用
:::details 点我查看代码
```vue
<template>
  <div>
    <custom-slider
      v-model:sliderValue="sliderValue"
      :sliderStep="10"
      :isOpenDigitalModulation="true"
    ></custom-slider>
    滑块的值：{{ sliderValue }}
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
const sliderValue: Ref<number> = ref(0);
</script>

<style scoped lang="less"></style>

```
:::

<CustomSliderTest></CustomSliderTest>