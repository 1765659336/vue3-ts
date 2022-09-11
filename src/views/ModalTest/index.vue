<template>
  <div>1-1</div>
  <div v-for="item in btnArray" :key="item.btnName">{{ item.btnName }}</div>
  <el-button type="primary" @click="isShowFun">打开DivOne弹窗</el-button>
  <DivOne
    v-if="modalVisible"
    :modalVisible="modalVisible"
    @isShowFunc="isShowFun"
    modalName="DivOne"
    isOpenMask
    isOpenMaskClose
  ></DivOne>
</template>

<script setup lang="ts">
import useBtnPermissions from "src/hooks/useBtnPermissions";
import useGetModal from "src/hooks/useGetModal";
const { AsyncComp: DivOne, isShowFun, modalVisible } = useGetModal("Modal");
const { btnArray } = useBtnPermissions();
</script>

<style scoped></style>
