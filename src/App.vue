<template>
  <div
    :style="{
      '--main-color--': `${styleVariableStore.mainColor}`,
      '--menu-title-color--': `${styleVariableStore.menuTitleColor}`,
      '--menu-trigger-icon-color--': `${styleVariableStore.menuTriggerIconColor}`,
      '--menu-main-color--': `${styleVariableStore.menuMainColor}`,
    }"
    class="app"
  >
    <router-view></router-view>
    <el-button type="primary" @click="createNode">Message</el-button>
    <global-navigation></global-navigation>
  </div>
</template>

<script setup lang="ts">
import { CustomMessage } from "src/components/CustomComponents/CustomMessage/index";
import GlobalNavigation from "src/components/GlobalNavigation/index.vue";
import { useStyleVariableStore } from "src/store/index";

// 全局样式仓库
const styleVariableStore = useStyleVariableStore();

// 调试测试CustomMessage消息提示组件
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
