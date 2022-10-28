<template>
  <div>
    <div v-for="item in modalArr" :key="item.modalName">
      <div>{{ item.modalName }}</div>
      <el-icon @click="item.isHiddenFun" v-if="item.modalVisible"
        ><ArrowUp
      /></el-icon>
      <el-icon @click="item.isHiddenFun" v-else><ArrowDown /></el-icon>
      <el-icon @click="item.isFullScreenFun"><FullScreen /></el-icon>
      <el-icon
        @click="
          () => {
            modalManageStore.ModalManage.$emit('modalArrDel', item.modalName);
            item.modalEmitFun();
          }
        "
        ><Close
      /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import operationModal from "./hooks/useOperationModal";
defineOptions({
  name: "/ModalManage",
});
const { modalArr, modalManageStore } = operationModal();
</script>

<style scoped lang="less"></style>
