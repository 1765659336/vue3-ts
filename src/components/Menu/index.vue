<template>
  <!-- 将teleported设置为false,此时整个结构会在最外层div class="app"节点下面，这样才能拿到css变量，否则会被添加到body下面，无法读取到css变量 -->
  <el-popover
    placement="right-end"
    :width="400"
    trigger="hover"
    :teleported="false"
  >
    <template #reference>
      <el-icon class="menu-trigger-icon"><Operation /></el-icon>
    </template>
    <router-link to="index">初始页</router-link>
    <div v-for="item in menuTree" :key="item.pageId">
      <div class="menu-title">一级菜单标题------{{ item.title }}</div>
      <div
        v-for="itemMenu in item.children"
        :key="itemMenu.pageId"
        @click="
          () => {
            menuClick(itemMenu.path);
          }
        "
      >
        <span class="menu-main">二级菜单可跳转------{{ itemMenu.title }}</span>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts" name="Menu">
import { useMenuStore } from "src/store";
import getMenuTree from "src/hooks/useGetMenuTree";
import router from "src/router";
// 菜单仓库
const menuStore = useMenuStore();
// 获取菜单树形结构hooks
const { menuTree } = getMenuTree(menuStore.menuData);
// 点击菜单路由跳转
const menuClick = function (path: string) {
  router.push({ path });
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
