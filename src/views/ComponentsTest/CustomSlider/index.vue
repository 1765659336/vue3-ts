<template>
  <div>
    <custom-slider v-model:sliderValue="sliderValue"></custom-slider>
    滑块的值：{{ sliderValue }}
  </div>
</template>

<script setup lang="ts">
import CustomSlider from "src/components/CustomComponents/CustomSlider/index.vue";
import { Ref, ref } from "vue";
const sliderValue:Ref<number> = ref(0);
</script>

<style scoped lang="less"></style>
