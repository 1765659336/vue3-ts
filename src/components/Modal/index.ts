import { PropType } from "vue";
import { ModalConfig } from "src/hooks/useGetModal";
export const propData = {
  // 外部弹窗创建与销毁（借助v-if）
  modalVisible: {
    type: Boolean,
    default: false,
  },
  // 是否显示弹窗
  isShowModal: {
    type: Boolean,
    default: false,
  },
  // 弹窗的名称渲染内容
  modalName: {
    type: String as PropType<keyof typeof ModalConfig>,
    default: "ModalError",
  },
  // 是否显示遮罩层
  isOpenMask: {
    type: Boolean,
    default: false,
  },
  // 是否开启点击遮罩层关闭弹窗
  isOpenMaskClose: {
    type: Boolean,
    default: false,
  },
};

export const emitData = ["isShowFunc"];
