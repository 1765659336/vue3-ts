<template>
  <div
    :style="{
      '--main-color--': `${StyleVariableStore.mainColor}`,
      '--menu-title-color--': `${StyleVariableStore.menuTitleColor}`,
      '--menu-trigger-icon-color--': `${StyleVariableStore.menuTriggerIconColor}`,
      '--menu-main-color--': `${StyleVariableStore.menuMainColor}`,
    }"
    class="app"
  >
    <router-view></router-view>
    <el-button type="primary" @click="createNode">弹窗弹窗</el-button>
    <global-navigation></global-navigation>
  </div>
</template>

<script setup lang="ts">
import useSysStyle from "./hooks/useSysStyle";
import { CustomMessage } from "src/components/CustomComponents/CustomMessage/index";
import GlobalNavigation from "src/components/GlobalNavigation/index.vue";
const { StyleVariableStore } = useSysStyle();
const createNode = function () {
  CustomMessage.error("报错", 3000, true);
  CustomMessage("success", "success");
};
</script>

<style scoped lang="less">
.app {
  position: relative;
}
</style>
