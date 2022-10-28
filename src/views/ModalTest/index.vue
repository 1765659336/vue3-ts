<template>
  <div>1-1</div>
  <div v-for="item in btnArray" :key="item.btnName">{{ item.btnName }}</div>
  <el-button type="primary" @click="isShowFunDivOne">打开DivOne弹窗</el-button>
  <el-button type="primary" @click="isShowFunModalError"
    >打开ModalError弹窗</el-button
  >
  {{ modalVisibleDivOne }}
  <DivOne
    v-if="modalVisibleDivOne"
    :modalVisible="modalVisibleDivOne"
    @isShowFunc="isShowFunDivOne"
    modalName="DivOne"
    isOpenMask
    isOpenMaskClose
  ></DivOne>
  <ModalError
    v-if="modalVisibleModalError"
    :modalVisible="modalVisibleModalError"
    @isShowFunc="isShowFunModalError"
    modalName="ModalError"
    isOpenMask
    isOpenMaskClose
  ></ModalError>
</template>

<script setup lang="ts">
import useBtnPermissions from "src/hooks/useBtnPermissions";
import useGetModal from "src/hooks/useGetModal";
defineOptions({
  name: "/ModalTest",
});
const {
  AsyncComp: DivOne,
  isShowFun: isShowFunDivOne,
  modalVisible: modalVisibleDivOne,
} = useGetModal("Modal");
const {
  AsyncComp: ModalError,
  isShowFun: isShowFunModalError,
  modalVisible: modalVisibleModalError,
} = useGetModal("Modal");
const { btnArray } = useBtnPermissions();
</script>

<style scoped></style>
