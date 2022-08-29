<template>
  <header class="index-header">
    <el-popover placement="right-end" :width="400" trigger="hover">
      <template #reference>
        <el-icon><Operation /></el-icon>
      </template>
      <router-link to="index">初始页</router-link>
      <div v-for="item in menu" :key="item.routeId">
        <div>一级菜单标题------{{ item.title }}</div>
        <div
          v-for="itemMenu in item.children"
          :key="itemMenu.routeId"
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
import { onMounted, reactive } from "vue";
import { GetResumeById } from "src/api";
import { useTestStore, useMenuStore } from "src/store";
import router from "src/router";
const testStore = useTestStore();
const menuStore = useMenuStore();
const menu = reactive<
  Array<{
    title: string;
    routeId: number;
    // 暂时只考虑到二级菜单
    children?: Array<{
      title: string;
      path: string;
      routeId: number;
      children?: Array<{ title: string; path: string }>;
    }>;
  }>
>([]);
onMounted(() => {
  menuStore.menuData.forEach((item) => {
    if (item.level === 1) {
      menu.push({
        title: item.mate.title,
        routeId: item.routeId,
        children: [],
      });
    }
  });
  menuStore.menuData.forEach((item) => {
    if (item.level === 2) {
      menu.forEach((menuItem) => {
        if (menuItem.routeId === item.parentId) {
          menuItem.children.push({
            title: item.mate.title,
            path: item.path,
            routeId: item.routeId,
          });
        }
      });
    }
  });
  GetResumeById(2).then((res) => {
    // console.log(res);
  });
});

const menuClick = function (path: string) {
  router.push({ path });
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
