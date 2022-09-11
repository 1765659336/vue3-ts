/* 
  @Description：打开模态弹窗Modal
*/
import { defineAsyncComponent, ref } from "vue";

export const ModalConfig = {
  Modal: {
    component: import("src/components/Modal/index.vue"),
    width: "300px",
    height: "300px",
  },
  ModalConfig: {
    component: import("src/views/Modals/ModalConfig/index.vue"),
    width: "300px",
    height: "300px",
  },
  ModalError: {
    component: import("src/views/Modals/ModalError/index.vue"),
    width: "300px",
    height: "300px",
  },
  DivOne: {
    component: import("src/views/Modals/DivOne/index.vue"),
    width: "600px",
    height: "600px",
  },
};

export default function (modalUrl: keyof typeof ModalConfig) {
  const AsyncComp = defineAsyncComponent(() => {
    return ModalConfig[modalUrl].component;
  });
  const modalVisible = ref(false);
  const isShowFun = function () {
    modalVisible.value = !modalVisible.value;
  };
  return {
    AsyncComp,
    isShowFun,
    modalVisible,
  };
}
