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
  </div>
</template>

<script setup lang="ts">
import useSysStyle from "./hooks/useSysStyle";
const { StyleVariableStore } = useSysStyle();
</script>

<style scoped lang="less">
.app {
  position: relative;
}
</style>
