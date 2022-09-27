<template>
  <div>
    <span> 系统主题颜色：</span><el-color-picker v-model="mainColor" />
    <span> 菜单触发图标的颜色：</span
    ><el-color-picker v-model="menuTriggerIconColor" />
    <span> 菜单标题的颜色：</span><el-color-picker v-model="menuTitleColor" />
    <span> 菜单主体的颜色：</span><el-color-picker v-model="menuMainColor" />
    <el-button @click="submit">保存</el-button>
  </div>
</template>

<script setup lang="ts">
import { useChangeConfig } from "./hooks/useChangeConfig";
const {
  mainColor,
  menuTriggerIconColor,
  menuTitleColor,
  menuMainColor,
  submit,
} = useChangeConfig();
</script>

<style scoped></style>
