<template>
  <div class="app">app</div>
  <div>{{ testStore.count }}</div>
  <el-button type="primary">Primary</el-button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useTestStore } from "src/store";
const testStore = useTestStore();

</script>

<style scoped lang="less">
</style>
