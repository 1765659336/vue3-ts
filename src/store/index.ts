import { defineStore } from "pinia";
import { PageSql } from "src/constraint/sqlsCommon";
import { IStyleVariableStore } from "src/constraint/storeCommon";
import getBus from "src/hooks/useGetBus";

// 定义菜单容器
export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      menuData: [] as PageSql,
    };
  },
  getters: {},
  actions: {
    changeState(menuData: PageSql) {
      this.menuData = [...menuData];
    },
  },
});

// 定义用户信息容器
export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      token: sessionStorage.getItem("token")
        ? sessionStorage.getItem("token")
        : "",
      userId: sessionStorage.getItem("userId")
        ? sessionStorage.getItem("userId")
        : 0,
    };
  },
  getters: {},
  actions: {
    changeToken(token: string) {
      this.token = token;
    },
    changeUserId(userId: number) {
      this.userId = userId;
    },
  },
});

// 全局样式变量仓库
export const useStyleVariableStore = defineStore("styleVariable", {
  state: () => {
    const state: IStyleVariableStore = {
      // 系统主题色
      mainColor: sessionStorage.getItem("mainColor")
        ? sessionStorage.getItem("mainColor")
        : "",
      // 菜单触发图标的颜色
      menuTriggerIconColor: sessionStorage.getItem("menuTriggerIconColor")
        ? sessionStorage.getItem("menuTriggerIconColor")
        : "",
      // 菜单标题的颜色
      menuTitleColor: sessionStorage.getItem("menuTitleColor")
        ? sessionStorage.getItem("menuTitleColor")
        : "",
      // 菜单主体的颜色
      menuMainColor: sessionStorage.getItem("menuMainColor")
        ? sessionStorage.getItem("menuMainColor")
        : "",
    };
    return state;
  },
  getters: {},
  actions: {
    changeMainColor(color: string) {
      this.mainColor = color;
    },
    changeMenuTriggerIconColor(color: string) {
      this.menuTriggerIconColor = color;
    },
    changeMenuTitleColor(color: string) {
      this.menuTitleColor = color;
    },
    changeMenuMainColor(color: string) {
      this.menuMainColor = color;
    },
  },
});

// 模态管理者仓库
export const useModalManageStore = defineStore("modalManage", {
  state: () => {
    const { Bus: ModalManage } = getBus();
    return { ModalManage: new ModalManage() };
  },
  getters: {},
  actions: {},
});
