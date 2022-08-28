import { defineStore } from "pinia";
// 1.定义并导出容器
export const useTestStore = defineStore("test", {
  /* 
        类似于组件中的data，用来存储全局状态的
        1、尽量使用函数，为了在服务器端渲染的时候避免交叉请求导致的数据状态污染。
        2、尽量使用箭头函数，为了更好的ts类型推导
    */
  state: () => {
    return {
      count: 10,
    };
  },

  /* 
        类似于组件的computed，用来封装计算属性，有缓存的功能
    */

  getters: {},

  /* 
        类似于methods,封装业务逻辑，修改state
    */
  actions: {},
});

// 定义菜单容器
export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      menuData: [],
    };
  },
  getters: {},
  actions: {
    changeState(menuData) {
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
    changeToken(token) {
      this.token = token;
    },
  },
});
