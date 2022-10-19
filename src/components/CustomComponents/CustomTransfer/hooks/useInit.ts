import { onMounted } from "vue";
import { dataItem } from "../index";

export default function (originalData: dataItem) {
  onMounted(() => {
    originalData.forEach((item, index) => {
      item.isCheckout = false;
      item.index = index + 1;
    });
  });
}
