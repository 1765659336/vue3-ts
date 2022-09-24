/* 
    @Description:控制内容区的切换
*/

import { ref } from "vue";

export default function () {
  // 控制内容的显示与隐藏
  const contentShow = ref(true);
  // 切换内容函数
  const contentShowFun = function () {
    contentShow.value = !contentShow.value;
  };
  return {
    contentShow,
    contentShowFun,
  };
}
