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
import { postSystemStyle } from "src/api/permissions";
import useSysStyle from "src/hooks/useSysStyle";
import { ref } from "vue";

const {
  StyleVariableStore,
  changeMainColor,
  changeMenuTriggerIconColor,
  changeMenuTitleColor,
  changeMenuMainColor,
} = useSysStyle();

const mainColor = ref(StyleVariableStore.mainColor);
const menuTriggerIconColor = ref(StyleVariableStore.menuTriggerIconColor);
const menuTitleColor = ref(StyleVariableStore.menuTitleColor);
const menuMainColor = ref(StyleVariableStore.menuMainColor);

const save = function () {
  changeMainColor(mainColor.value as string);
  changeMenuTriggerIconColor(menuTriggerIconColor.value as string);
  changeMenuTitleColor(menuTitleColor.value as string);
  changeMenuMainColor(menuMainColor.value as string);
  postSystemStyle(Number(sessionStorage.getItem("userId")), {
    mainColor: mainColor.value,
    menuTriggerIconColor: menuTriggerIconColor.value,
    menuTitleColor: menuTitleColor.value,
    menuMainColor: menuMainColor.value,
  }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped></style>
