<template>
  <div>
    <div class="title">首页</div>
    <HomeAnimation></HomeAnimation>
    <div v-for="item in btnArray" :key="item.btnName">{{ item.btnName }}</div>
  </div>
</template>

<script setup lang="ts">
import useBtnPermissions from "src/hooks/useBtnPermissions";
defineOptions({
  name: "/Home",
});
const { btnArray } = useBtnPermissions();
</script>

<style scoped lang="less">
@import url("./index.less");
</style>

