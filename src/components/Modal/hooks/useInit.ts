import { computed, onMounted, Ref } from "vue";
import { ModalConfig } from "src/hooks/useGetModal";

/* 
    @Description: 
        1、接收组件的props和emits
        2、模态创建成功时，将其添加到模态管理者中ModalManage
*/
export default function (
  modalName: keyof typeof ModalConfig,
  modalEmits: any,
  modalManageStore: any,
  isFullScreenFun: Function,
  isFullStyleReactive: Function,
  isHiddenFun: Function,
  modalVisible: Ref<Boolean>
) {
  const modalContentWidth = computed(() => {
    // 调用远程接口获取当前模态远程配置宽度
    return ModalConfig[modalName].width;
  });
  const modalContentHeight = computed(() => {
    // 调用远程接口获取当前模态远程配置高度
    return ModalConfig[modalName].height;
  });
  onMounted(() => {
    // 弹窗打开时即新增，需要在modalManage中新增一个弹窗数据
    modalManageStore.ModalManage.$emit("modalArrAdd", {
      modalName,
      isFullScreenFun: () => {
        isFullScreenFun();
        isFullStyleReactive();
      },
      isHiddenFun,
      // 将该弹窗外部传入的事件给modalManage调用
      modalEmitFun: () => {
        modalEmits("isShowFunc");
      },
      modalVisible,
    });
  });
  return {
    modalContentWidth,
    modalContentHeight,
  };
}
