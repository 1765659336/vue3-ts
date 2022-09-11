import { ref } from "vue";
/* 
    @Description: 模态modal的顶部按钮
*/
export default function () {
  //   控制模态显示与隐藏变量
  const modalVisible = ref(true);
  //   控制模态显示与隐藏的函数
  const isHiddenFun = function () {
    modalVisible.value = !modalVisible.value;
  };
  //   控制当前模态是否占据全屏的变量
  const modalFullScreen = ref(false);
  //   控制模态是否占据全屏的函数
  const isFullScreenFun = function () {
    modalFullScreen.value = !modalFullScreen.value;
  };
  return {
    modalFullScreen,
    isHiddenFun,
    modalVisible,
    isFullScreenFun,
  };
}
