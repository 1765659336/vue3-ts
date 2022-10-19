import { ref, watch } from "vue";
import { dataItem } from "../index";

export default function (originalData: dataItem, selectedData: dataItem) {
  const totalOriginalSelectNumber = ref(0);
  const selectedDataSelectNumber = ref(0);
  watch(originalData, () => {
    totalOriginalSelectNumber.value = originalData.reduce(
      (previousValue, currentValue) => {
        return currentValue.isCheckout ? previousValue + 1 : previousValue;
      },
      0
    );
  });
  watch(selectedData, () => {
    selectedDataSelectNumber.value = selectedData.reduce(
      (previousValue, currentValue) => {
        return currentValue.isCheckout ? previousValue + 1 : previousValue;
      },
      0
    );
  });

  return {
    totalOriginalSelectNumber,
    selectedDataSelectNumber,
  };
}
