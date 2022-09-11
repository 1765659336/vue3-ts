/* 
    @Description: 操作模态数量
*/
import { cloneDeep } from "lodash";
import { useModalManageStore } from "src/store";
import { reactive,Ref } from "vue";
interface IModalArrItem {
  // 模态名称作为唯一判断标识
  modalName: string;
  // 弹窗全屏函数
  isFullScreenFun: Function;
  // 弹窗显示隐藏函数
  isHiddenFun: Function;
  // 弹窗外部父亲控制显示与隐藏函数
  modalEmitFun: Function;
  // 这里ts为什么不能用Ref<Boolean>，不知道为什么，用Boolean约束不报错，但是我传递的还是一个ref(boolean)的值
  modalVisible: Boolean;
}
export default function () {
  const modalManageStore = useModalManageStore();
  // 弹窗数组
  const modalArr = reactive<Array<IModalArrItem>>([]);
  const modalArrAdd = function (modalArrItem: IModalArrItem) {
    modalArr.push(modalArrItem);
  };
  const modalArrDel = function (modalName: string) {
    const modalArrClone = cloneDeep(modalArr);
    modalArr.length = 0;
    modalArr.push(
      ...modalArrClone.filter((element) => element.modalName !== modalName)
    );
  };
  modalManageStore.ModalManage.$on("modalArrAdd", modalArrAdd);
  modalManageStore.ModalManage.$on("modalArrDel", modalArrDel);
  return {
    modalArr,
    modalManageStore,
  };
}
