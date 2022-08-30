<template>
  <header class="index-header">
    <el-popover placement="right-end" :width="400" trigger="hover">
      <template #reference>
        <el-icon><Operation /></el-icon>
      </template>
      <router-link to="index">初始页</router-link>
      <div v-for="item in menuTree" :key="item.pageId">
        <div>一级菜单标题------{{ item.title }}</div>
        <div
          v-for="itemMenu in item.children"
          :key="itemMenu.pageId"
          @click="
            () => {
              menuClick(itemMenu.path);
            }
          "
        >
          二级菜单可跳转------{{ itemMenu.title }}
        </div>
      </div>
    </el-popover>
  </header>
  <div class="index-content">
    <router-view></router-view>
  </div>
  <footer class="index-footer">底部小信息</footer>
</template>

<script setup lang="ts" name="Index">
import { useMenuStore } from "src/store";
import getMenuTree from "src/hooks/useGetMenuTree";
import router from "src/router";
const menuStore = useMenuStore();
const {menuTree} = getMenuTree(menuStore.menuData);
const menuClick = function (path: string) {
  router.push({ path });
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
