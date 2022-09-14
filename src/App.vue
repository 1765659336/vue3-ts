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
  </div>
</template>

<script setup lang="ts">
import useSysStyle from "./hooks/useSysStyle";
import {
  CustomMessage,
  SetCustomMessageManageConfig,
} from "src/components/CustomComponents/CustomMessage/index";
const { StyleVariableStore } = useSysStyle();
SetCustomMessageManageConfig(5000, false);
const createNode = function () {
  console.log(CustomMessage);
  CustomMessage.error("报错", 3000, true);
  CustomMessage("success", "success");
};
</script>

<style scoped lang="less">
.app {
  position: relative;
}
</style>
