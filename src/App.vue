<template>
  <div :style="{ '--main-color--': `${StyleVariableStore.mainColor}` }">
    <router-view></router-view>
    <el-button @click="changeColor">测试修改全局主题色</el-button>
  </div>
</template>

<script setup lang="ts">
import useSysStyle from "./hooks/useSysStyle";
const { StyleVariableStore, changeColor } = useSysStyle();
</script>

<style scoped lang="less"></style>