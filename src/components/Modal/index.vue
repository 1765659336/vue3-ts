<template>
  <div
    class="modal-whole-container"
    v-if="modalProps.modalVisible"
    v-show="modalVisible"
    :style="{
      '--modal-content-width--': `${
        modalFullScreen ? '100vw' : modalContentWidth
      }`,
      '--modal-content-height--': `${
        modalFullScreen ? '100vh' : modalContentHeight
      }`,
    }"
  >
    <div
      class="modal-mask"
      @click="isShutDownFun"
      v-if="modalProps.isOpenMask"
    ></div>
    <div class="modal-content-container" ref="modalContentRef">
      <div>
        <el-icon @click="isShowFun"><Setting /></el-icon>
        <el-icon @click="isHiddenFun"><ArrowUp /></el-icon>
        <el-icon @click="()=>{
          // 先执行isFullScreenFun填充全屏函数，不然isFullStyleReactive函数的if逻辑会相反
          isFullScreenFun();
          isFullStyleReactive();
        }"><FullScreen /></el-icon>
        <el-icon @click="isShutDownFun"><Close /></el-icon>
      </div>
      <AsyncComp></AsyncComp>
      <ModalConfigComp v-if="modalConfigVisible"></ModalConfigComp>
    </div>
  </div>
</template>

<script setup lang="ts">
import getModal from "./hooks/useGetModal";
import getMask from "./hooks/useGetMask";
import modalBtn from "./hooks/useModalBtn";
import { useModalManageStore } from "src/store";
import useInit from "./hooks/useInit";
import { propData, emitData } from "./index";
import useDrag from "src/hooks/useDrag";
import { onMounted, ref, Ref } from "vue";

// 获取模态实例
const modalContentRef: Ref<HTMLElement | null> = ref(null);
onMounted(() => {
  if (modalContentRef.value) {
    useDrag(modalContentRef.value);
  }
});
const isFullStyleTop = ref("");
const isFullStyleLeft = ref("");
// 点击是否充满屏幕时，记住拖拽的位置，并在下次复原
const isFullStyleReactive = function () {
  if (modalContentRef.value) {
    if (modalFullScreen.value) {
      // 填充整个屏幕
      isFullStyleTop.value = modalContentRef.value.style.top;
      isFullStyleLeft.value = modalContentRef.value.style.left;
      modalContentRef.value.style.top = "0px";
      modalContentRef.value.style.left = "0px";
    } else {
      // 复原位置
      modalContentRef.value.style.top = isFullStyleTop.value;
      modalContentRef.value.style.left = isFullStyleLeft.value;
    }
  }
};
const modalProps = defineProps(propData);
const { modalFullScreen, isHiddenFun, modalVisible, isFullScreenFun } =
  modalBtn();
const modalManageStore = useModalManageStore();
const modalEmits = defineEmits(emitData);
const { modalContentWidth, modalContentHeight } = useInit(
  modalProps.modalName,
  modalEmits,
  modalManageStore,
  isFullScreenFun,
  isFullStyleReactive,
  isHiddenFun,
  modalVisible
);
const { AsyncComp, ModalConfigComp, isShowFun, modalConfigVisible } =
  getModal(modalProps);
const { isShutDownFun } = getMask(modalProps, modalEmits, modalManageStore);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
