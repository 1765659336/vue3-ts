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
    <GlobalNavigation></GlobalNavigation>
  </div>
</template>

<script setup lang="ts">
import { useStyleVariableStore } from "src/store/index";
import GlobalNavigation from "src/components/GlobalNavigation/index.vue"

// 全局样式仓库
const styleVariableStore = useStyleVariableStore();

</script>

<style scoped lang="less">
.app {
  position: relative;
}
</style>
