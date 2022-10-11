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
    <global-navigation></global-navigation>
  </div>
</template>

<script setup lang="ts">
import GlobalNavigation from "src/components/GlobalNavigation/index.vue";
import { useStyleVariableStore } from "src/store/index";

// 全局样式仓库
const styleVariableStore = useStyleVariableStore();

</script>

<style scoped lang="less">
.app {
  position: relative;
}
</style>
