export default {
  beforeMount(el: any, binding: any) {
    // 借助el,在多个钩子函数中共用一份变量
    el.targetContent = binding.value;
    // 复制成功触发回调事件
    const success = binding.arg;
    // click事件会不会冲突，待测试
    el.addEventListener("click", () => {
      if (!el.targetContent)
        return console.warn(
          `v-copy warning: [${el}]-The value of the copy is empty`
        );
      // 创建textarea标签
      const textarea: HTMLTextAreaElement = document.createElement("textarea");
      // 设置相关属性
      textarea.readOnly = true;
      // 移出可视区域外
      textarea.style.position = "fixed";
      textarea.style.top = "-99999px";
      // 把目标内容赋值给它的value属性
      textarea.value = el.targetContent;
      // 插入到页面
      document.body.appendChild(textarea);
      // 调用 <textarea /> 标签的 onselect() 选中值
      textarea.select();
      // 把目标内容复制进剪贴板, 该API会返回一个Boolean
      const res = document.execCommand("Copy");
      res && success
        ? success(el.targetContent)
        : console.info(
            "Copy successful, Go to paste. value is " + el.targetContent
          );
      // 移除textarea标签
      document.body.removeChild(textarea);
    });
  },
  updated(el: any, binding: any) {
    // 实时更新最新的目标内容
    el.targetContent = binding.value;
  },
  unmounted(el: any) {
    el.removeEventListener("click", () => {});
  },
};
