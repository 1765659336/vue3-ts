<template>
  <div class="div">
    <CustomBackTop></CustomBackTop>
    <CustomBackTop :bottom="200" :right="200" :hiddenValue="160"
      ><div class="fast">快</div></CustomBackTop
    >
    <CustomBackTop
      :bottom="150"
      :right="150"
      :hiddenValue="100"
      :animationTime="100"
      ><div class="slow">慢</div></CustomBackTop
    >
  </div>
</template>

<script setup lang="ts">
import CustomBackTop from "../../../../src/components/CustomComponents/CustomBackTop/index.vue";
//   defineOptions({
//     name: "CustomBackTopTest",
//   });
</script>

<style scoped lang="less">
.div {
  height: 600px;
}

.fast {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  background-color: red;
}

.slow {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: green;
}
</style>
