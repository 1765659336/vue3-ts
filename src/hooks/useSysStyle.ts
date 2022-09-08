/* 
    @Description: 系统样式与对应的修改方法
*/

import { useStyleVariableStore } from "src/store";

export default function () {
  const StyleVariableStore = useStyleVariableStore();
  // 修改主题颜色
  const changeMainColor = function (color: string) {
    StyleVariableStore.changeMainColor(color);
    sessionStorage.setItem("mainColor", color);
  };
  // 修改菜单触发图标的颜色
  const changeMenuTriggerIconColor = function (color: string) {
    StyleVariableStore.changeMenuTriggerIconColor(color);
    sessionStorage.setItem("menuTriggerIconColor", color);
  };
  // 修改菜单标题的颜色
  const changeMenuTitleColor = function (color: string) {
    StyleVariableStore.changeMenuTitleColor(color);
    sessionStorage.setItem("menuTitleColor", color);
  };
  // 修改菜单主体的颜色
  const changeMenuMainColor = function (color: string) {
    StyleVariableStore.changeMenuMainColor(color);
    sessionStorage.setItem("menuMainColor", color);
  };
  return {
    StyleVariableStore,
    changeMainColor,
    changeMenuTriggerIconColor,
    changeMenuTitleColor,
    changeMenuMainColor
  };
}
