import { dataItem, dataItemArrayItem } from "../index";

export default function (
  originalData: dataItem,
  selectedData: dataItem,
  emits: any
) {
  // 顺序排序辅助函数
  const orderSortFun = function (array: dataItem) {
    // array要是响应式的，不然需要return出去重新赋值
    array.sort((a: dataItemArrayItem, b: dataItemArrayItem) => {
      if (a.index && b.index) {
        return a.index - b.index;
      } else {
        return 0;
      }
    });
  };

  // 修改所有的选中状态
  const changeAllIsCheck = function (array: dataItem, value: boolean) {
    array.forEach((item) => (item.isCheckout = value));
  };

  const clickLeft = function () {
    const filterOriginalData = selectedData.filter((item) => item.isCheckout);
    originalData.push(...filterOriginalData);
    orderSortFun(originalData);
    const filterSelectData = selectedData.filter((item) => !item.isCheckout);
    selectedData.length = 0;
    selectedData.push(...filterSelectData);
    emits("update:transferValue", selectedData);
    changeAllIsCheck(originalData, false);
  };

  const clickRight = function () {
    const filterSelectData = originalData.filter((item) => item.isCheckout);
    selectedData.push(...filterSelectData);
    orderSortFun(selectedData);
    const filterOriginalData = originalData.filter((item) => !item.isCheckout);
    originalData.length = 0;
    originalData.push(...filterOriginalData);
    emits("update:transferValue", filterSelectData);
    changeAllIsCheck(selectedData, false);
  };

  return {
    clickLeft,
    clickRight,
  };
}
