<template>
  <div style="padding: 50px">
    <el-button v-loading="flag" loading-text="" @click="flag = !flag">
      按钮
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineOptions({
//   name: "/InstructionsLoading",
// });
const flag = ref(false);
</script>

<style scoped lang="less"></style>
