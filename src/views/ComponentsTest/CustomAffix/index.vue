<template>
  <CustomAffix :target="refD" :top="100" :left="100">
    <div>固定</div>
  </CustomAffix>
  <CustomAffix :target="refD" :top="10" :left="10">
    <div>固定</div>
  </CustomAffix>
  <div class="test-div" ref="refD"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineOptions({
//   name: "/CustomAffixTest",
// });
const refD = ref();
</script>

<style scoped lang="less">
.test-div {
  width: 200%;
  height: 500%;
  overflow: auto;
}
</style>
