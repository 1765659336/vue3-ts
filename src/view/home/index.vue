<template>
  <div>123</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { GetResumeById } from "src/api";

onMounted(() => {
  GetResumeById(2).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped lang="less"></style>
