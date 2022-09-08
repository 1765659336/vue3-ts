<template>
  <div>
    <span> 系统主题颜色：</span><el-color-picker v-model="mainColor" />
    <span> 菜单触发图标的颜色：</span
    ><el-color-picker v-model="menuTriggerIconColor" />
    <span> 菜单标题的颜色：</span><el-color-picker v-model="menuTitleColor" />
    <span> 菜单主体的颜色：</span><el-color-picker v-model="menuMainColor" />
    <el-button @click="save">保存</el-button>
  </div>
</template>

<script setup lang="ts">
import useSysStyle from "src/hooks/useSysStyle";
import { ref } from "vue";

const mainColor = ref("");
const menuTriggerIconColor = ref("");
const menuTitleColor = ref("");
const menuMainColor = ref("");
const {
  changeMainColor,
  changeMenuTriggerIconColor,
  changeMenuTitleColor,
  changeMenuMainColor,
} = useSysStyle();
const save = function () {
  changeMainColor(mainColor.value);
  changeMenuTriggerIconColor(menuTriggerIconColor.value);
  changeMenuTitleColor(menuTitleColor.value);
  changeMenuMainColor(menuMainColor.value);
};
</script>

<style scoped></style>
