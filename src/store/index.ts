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
      token: sessionStorage.getItem("pinia-userInfo-token")
        ? sessionStorage.getItem("pinia-userInfo-token")
        : "",
      userId: sessionStorage.getItem("pinia-userInfo-userId")
        ? sessionStorage.getItem("pinia-userInfo-userId")
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
      mainColor: sessionStorage.getItem("pinia-styleVariable-mainColor")
        ? sessionStorage.getItem("pinia-styleVariable-mainColor")
        : "",
      // 菜单触发图标的颜色
      menuTriggerIconColor: sessionStorage.getItem(
        "pinia-styleVariable-menuTriggerIconColor"
      )
        ? sessionStorage.getItem("pinia-styleVariable-menuTriggerIconColor")
        : "",
      // 菜单标题的颜色
      menuTitleColor: sessionStorage.getItem(
        "pinia-styleVariable-menuTitleColor"
      )
        ? sessionStorage.getItem("pinia-styleVariable-menuTitleColor")
        : "",
      // 菜单主体的颜色
      menuMainColor: sessionStorage.getItem("pinia-styleVariable-menuMainColor")
        ? sessionStorage.getItem("pinia-styleVariable-menuMainColor")
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
