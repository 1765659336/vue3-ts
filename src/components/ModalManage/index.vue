<template>
  <el-popover
    placement="right-end"
    :width="400"
    trigger="hover"
    :teleported="false"
  >
    <template #reference>
      <el-icon><Operation /></el-icon>
    </template>
    <div v-for="item in modalArr" :key="item.modalName">
      <div>{{ item.modalName }}</div>
      <el-icon @click="item.isHiddenFun" v-if="item.modalVisible"><ArrowUp /></el-icon>
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
  </el-popover>
</template>

<script setup lang="ts">
import operationModal from "./hooks/useOperationModal";
const { modalArr, modalManageStore } = operationModal();
</script>

<style scoped lang="less"></style>
