<template>
  <div class="custom-transfer-container">
    <div class="custom-transfer-original-data">
      <div>{{ totalOriginalSelectNumber }}/{{ originalData.length }}</div>
      <CustomCheckbox
        class="custom-transfer-original-data-item"
        v-for="item in originalData"
        v-model="item.isCheckout"
        :label="item.label"
        :key="item.key"
        :disabled="item.disabled"
      />
    </div>
    <div class="custom-transfer-button">
      <CustomButton @click="clickLeft" v-show="selectedDataSelectNumber !== 0"
        >向左</CustomButton
      >
      <CustomButton @click="clickRight" v-show="totalOriginalSelectNumber !== 0"
        >向右</CustomButton
      >
    </div>
    <div class="custom-transfer-selected-data">
      <div>{{ selectedDataSelectNumber }}/{{ selectedData.length }}</div>
      <CustomCheckbox
        class="custom-transfer-selected-data-item"
        v-for="item in selectedData"
        v-model="item.isCheckout"
        :label="item.label"
        :key="item.key"
        :disabled="item.disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, reactive, toRef } from "vue";
import CustomButton from "src/components/CustomComponents/CustomButton/index.vue";
import { dataItem } from "./index";
import CustomCheckbox from "src/components/CustomComponents/CustomCheckbox/index.vue";
import useInit from "./hooks/useInit";
import useOperation from "./hooks/useOperation";
import useWatch from "./hooks/useWatch";

defineOptions({
  name: "CustomTransfer",
});
const props = defineProps({
  value: {
    type: Object,
  },
  data: {
    type: Object as PropType<dataItem>,
    default: () => {
      return [];
    },
  },
});
const emits = defineEmits(["update:transferValue"]);
// 被选择的原始数据
const originalData: dataItem = reactive(props.data);
// 被选中的数据
const selectedData: dataItem = reactive([]);
useInit(originalData);
const { clickLeft, clickRight } = useOperation(
  originalData,
  selectedData,
  emits
);
const { totalOriginalSelectNumber, selectedDataSelectNumber } = useWatch(
  originalData,
  selectedData
);
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
