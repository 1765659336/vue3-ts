<template>
  <div ref="GlobalNavigationRef" class="global-navigation-container">
    <div v-show="contentShow" class="eye-container" @click="contentShowFun">
      eye
    </div>
    <div v-show="!contentShow" class="content-container">
      <el-icon @click="contentShowFun"><Briefcase /></el-icon>
      <ModalManage></ModalManage>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDrag from "src/hooks/useDrag";
import { onMounted, Ref, ref } from "vue";
import ModalManage from "src/components/ModalManage/index.vue";
import { Briefcase } from "@element-plus/icons-vue";
import useContentSwitch from "src/components/GlobalNavigation/hooks/useContentSwitch";
defineOptions({
  name: "/CustomNavigation",
});

const GlobalNavigationRef: Ref<HTMLElement | undefined> = ref();
onMounted(() => {
  if (GlobalNavigationRef.value) {
    useDrag(GlobalNavigationRef.value);
  }
});
const { contentShow, contentShowFun } = useContentSwitch();
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
