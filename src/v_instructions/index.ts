import copy from "./copy";
// 自定义指令
const directives: { [k: string]: any } = {
  copy,
};

export default {
  install(Vue: any) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
