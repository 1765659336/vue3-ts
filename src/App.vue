<template>
  <div
    :style="{
      '--main-color--': StyleVariableStore.mainColor,
      '--menu-title-color--': StyleVariableStore.menuTitleColor,
      '--menu-trigger-icon-color--': StyleVariableStore.menuTriggerIconColor,
      '--menu-main-color--': StyleVariableStore.menuMainColor,
    }"
  >
    <router-view></router-view>
  </div>
  <div>{{StyleVariableStore.mainColor}}</div>
  <div>{{StyleVariableStore.menuTitleColor}}</div>
  <div>{{StyleVariableStore.menuTriggerIconColor}}</div>
  <div>{{StyleVariableStore.menuMainColor}}</div>
</template>

<script setup lang="ts">
import useSysStyle from "./hooks/useSysStyle";
const { StyleVariableStore } = useSysStyle();
</script>

<style scoped lang="less"></style>
