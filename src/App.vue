<template>
  <div class="app">app</div>
  <div>{{ testStore.count }}</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useTestStore } from "@/store";
const testStore = useTestStore();

</script>

<style scoped lang="less">
</style>
