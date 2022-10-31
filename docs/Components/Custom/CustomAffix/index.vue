<template>
  <div class="container">
      <CustomAffix :top="100">
          <div>固定顶部100px</div>
      </CustomAffix>
  </div>
</template>

<script setup lang="ts">
import CustomAffix from "../../../../src/components/CustomComponents/CustomAffix/index.vue";
//   defineOptions({
//     name: "/CustomAffixTest",
//   });
</script>

<style scoped lang="less">
.container {
height: 600px;
overflow: auto;
}
</style>
