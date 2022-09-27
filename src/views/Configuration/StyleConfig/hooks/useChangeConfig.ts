import { postSystemStyle } from "src/api/permissions";
import { useStyleVariableStore } from "src/store/index";
import { ref } from "vue";

export function useChangeConfig() {
  // 全局样式变量仓库
  const styleVariableStore = useStyleVariableStore();
  // 获取仓库中样式配置数据
  const mainColor = ref(styleVariableStore.mainColor);
  const menuTriggerIconColor = ref(styleVariableStore.menuTriggerIconColor);
  const menuTitleColor = ref(styleVariableStore.menuTitleColor);
  const menuMainColor = ref(styleVariableStore.menuMainColor);

  // 保存当前用户配置的样式
  const submit = function () {
    postSystemStyle(Number(sessionStorage.getItem("pinia-userInfo-userId")), {
      mainColor: mainColor.value,
      menuTriggerIconColor: menuTriggerIconColor.value,
      menuTitleColor: menuTitleColor.value,
      menuMainColor: menuMainColor.value,
    }).then((res) => {
      styleVariableStore.changeMainColor(mainColor.value as string);
      styleVariableStore.changeMenuTriggerIconColor(
        menuTriggerIconColor.value as string
      );
      styleVariableStore.changeMenuTitleColor(menuTitleColor.value as string);
      styleVariableStore.changeMenuMainColor(menuMainColor.value as string);
    });
  };

  return {
    mainColor,
    menuTriggerIconColor,
    menuTitleColor,
    menuMainColor,
    submit,
  };
}
