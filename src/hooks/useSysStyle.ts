/* 
    @Description: 系统样式与对应的修改方法
*/

import { useStyleVariableStore } from "src/store";

export default function () {
  const StyleVariableStore = useStyleVariableStore();
  const changeColor = function () {
    StyleVariableStore.changeMainColor("skyblue");
    sessionStorage.setItem("mainColor", "skyblue");
  };
  return {
    StyleVariableStore,
    changeColor,
  };
}
