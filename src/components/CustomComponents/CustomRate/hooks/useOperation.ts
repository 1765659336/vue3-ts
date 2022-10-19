import { reactive, ref } from "vue";

export default function (props: any, emits: any) {
  // 评分系统默认类名
  const classArr: Array<{ "custom-rate-item": boolean; "be-select": boolean }> =
    reactive([]);

  // 点击之后是否还会随着鼠标的移动而选中
  const isClickLock = ref(false);

  const mouseEnter = function (index: number) {
    if (!isClickLock.value) {
      for (let i = 0; i <= index; i++) {
        classArr[i]["be-select"] = true;
      }
    }
  };

  const mouseLeave = function (index: number) {
    if (!isClickLock.value) {
      classArr[index]["be-select"] = false;
    }
  };

  const mouseClick = function (index: number) {
    isClickLock.value = true;
    if (props.rateItemNumber) {
      for (let i = 0; i < props.rateItemNumber; i++) {
        classArr[i]["be-select"] = i <= index;
      }
      emits("update:rateValue", index + 1);
    }
  };

  const containerMouseLeave = function () {
    if (!isClickLock.value) {
      for (let i = 0; i <= props.rateItemNumber; i++) {
        if (i >= props.rateValue) {
          classArr[i]["be-select"] = false;
        }else {
          classArr[i]["be-select"] = true;
        }
      }
    }
  };

  return {
    classArr,
    mouseEnter,
    mouseLeave,
    mouseClick,
    containerMouseLeave,
  };
}
