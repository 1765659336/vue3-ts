<template>
  <div class="app">app</div>
  <div>{{ testStore.count }}</div>
  <el-button type="primary">Primary</el-button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { GetResumeById } from "src/api";
import { useTestStore } from "src/store";
const testStore = useTestStore();
onMounted(() => {
  GetResumeById(2).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
