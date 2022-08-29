<template>
  <div :style="{ '--main-color--': StyleVariableStore.mainColor }">
    <router-view></router-view>
    <el-button @click="changeColor">测试修改全局主题色</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStyleVariableStore } from "src/store";
const StyleVariableStore = useStyleVariableStore();
const changeColor = function () {
  StyleVariableStore.changeMainColor("skyblue");
  sessionStorage.setItem("mainColor", "skyblue");
};
</script>

<style scoped lang="less"></style>
