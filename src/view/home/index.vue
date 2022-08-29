<template>
  <div :style="{ '--main-color--': StyleVariableStore.mainColor }">
    <div>{{ StyleVariableStore.mainColor }}</div>
    <div class="title">首页</div>
    <el-button @click="changeColor">测试修改全局主题色</el-button>
    <div v-for="item in btnArray" :key="item.btnName">{{ item.btnName }}</div>
  </div>
</template>

<script setup lang="ts">
import useBtnPermissions from "src/hooks/useBtnPermissions";
import { useStyleVariableStore } from "src/store";
const StyleVariableStore = useStyleVariableStore();
const { btnArray } = useBtnPermissions();
const changeColor = function () {
  StyleVariableStore.changeMainColor("skyblue");
  sessionStorage.setItem("mainColor", "skyblue");
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
