<template>
  <header class="index-header">
    <Menu></Menu>
    <ModalManage></ModalManage>
  </header>
  <div class="index-content">
    <router-view></router-view>
  </div>
  <footer class="index-footer">底部小信息</footer>
</template>

<script setup lang="ts" name="Index">
import Menu from "src/components/Menu/index.vue";
import ModalManage from "src/components/ModalManage/index.vue";
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
