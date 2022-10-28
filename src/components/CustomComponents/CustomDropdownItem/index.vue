<template>
  <div
    class="custom-dropdown-item-container"
    @click="fn"
    ref="customDropDownItemRef"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, PropType, ref } from "vue";

defineOptions({
  name: "CustomDropdownItem",
});

const props = defineProps({
  command: {
    type: Object as PropType<any>,
  },
  clickClose: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
});

const fn = function (e: MouseEvent) {
  props.clickClose && currentInstance?.parent?.setupState.showChange();
  currentInstance?.parent?.parent?.setupState.childrenClick(props.command);
};

const customDropDownItemRef = ref();

const currentInstance = getCurrentInstance();
</script>

<style scoped lang="less">
.custom-dropdown-item-container {
  border: 1px solid #ccc;
}
</style>
