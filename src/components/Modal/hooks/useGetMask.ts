/* 
  @Description：模态的遮罩层关闭
*/
export default function (
  modalProps: any,
  modalEmits: any,
  modalManageStore: any
) {
  const isShutDownFun = function () {
    // 开启遮罩层可关闭弹窗的功能，才能点击遮罩层关闭弹窗
    if (modalProps.isOpenMaskClose) {
      modalEmits("isShowFunc");
      modalManageStore.ModalManage.$emit("modalArrDel", modalProps.modalName);
    }
  };

  return { isShutDownFun };
}
