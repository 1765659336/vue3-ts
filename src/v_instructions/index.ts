import copy from "./Copy";
import realImg from "./RealImg"
// 自定义指令
const directives: { [k: string]: any } = {
  copy,
  realImg
};

export default {
  install(Vue: any) {
    // 将指令挂载到全局
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
