import { defineStore } from "pinia";
import { PageSql } from "src/constraint/sqlsCommon";

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
    };
  },
  getters: {},
  actions: {
    changeToken(token:string) {
      this.token = token;
    },
  },
});

// 全局样式变量仓库
export const useStyleVariableStore = defineStore("styleVariable", {
  state: () => {
    return {
      mainColor: sessionStorage.getItem("mainColor")
        ? sessionStorage.getItem("mainColor")
        : "",
    };
  },
  getters: {},
  actions: {
    changeMainColor(color) {
      this.mainColor = color;
    },
  },
});
