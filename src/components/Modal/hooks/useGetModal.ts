/* 
  @Description：根据外部传入的modal模态key来渲染结构
*/
import useGetModal from "src/hooks/useGetModal";
export default function (modalProps: any) {
  const { AsyncComp } = useGetModal(modalProps.modalName);
  const {
    AsyncComp: ModalConfigComp,
    isShowFun,
    modalVisible:modalConfigVisible,
  } = useGetModal("ModalConfig");
  return {
    AsyncComp,
    ModalConfigComp,
    isShowFun,
    modalConfigVisible
  };
}
