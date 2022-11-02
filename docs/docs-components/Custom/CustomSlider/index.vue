<template>
  <div>
    <customSlider
      v-model:sliderValue="sliderValue"
      :sliderStep="10"
      :isOpenDigitalModulation="true"
    ></customSlider>
    滑块的值：{{ sliderValue }}
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
const sliderValue: Ref<number> = ref(0);
</script>

<style scoped lang="less"></style>
