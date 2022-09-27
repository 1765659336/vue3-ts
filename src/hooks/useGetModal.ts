/* 
  @Description：打开模态弹窗Modal
*/
import { defineAsyncComponent, ref } from "vue";

// 系统中所有的弹窗内容组件
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
  // 加载异步组件
  const AsyncComp = defineAsyncComponent(() => {
    return ModalConfig[modalUrl].component;
  });
  // 控制弹窗的显示与隐藏
  const modalVisible = ref(false);
  // 改变弹窗状态的方法
  const isShowFun = function () {
    modalVisible.value = !modalVisible.value;
    console.log(AsyncComp);
  };
  return {
    AsyncComp,
    isShowFun,
    modalVisible,
  };
}
