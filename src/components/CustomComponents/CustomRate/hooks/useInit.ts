import { onMounted } from "vue";

export default function (
  props: any,
  classArr: Array<{ "custom-rate-item": boolean; "be-select": boolean }>
) {
  onMounted(() => {
    if (props.rateItemNumber) {
      // 初始化类名数组
      for (let i = 0; i < props.rateItemNumber; i++) {
        classArr.push({ "custom-rate-item": true, "be-select": false });
      }
      // 根据外部传入的默认值来设置组件的初始选中状态
      for (let i = 0; i < props.rateValue; i++) {
        if (i <= props.rateItemNumber) {
          classArr[i]["be-select"] = true;
        }
      }
    }
  });
}
