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
// defineOptions({
//   name: "CustomSliderTest",
// });

const sliderValue: Ref<number> = ref(0);
</script>

<style scoped lang="less"></style>
