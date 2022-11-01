<template>
  <div class="custom-dropdown-container" ref="customDropdownRef">
    <CustomPopover>
      <template #reference>
        <slot name="dropdown"></slot>
      </template>
      <template #content>
        <slot></slot>
      </template>
    </CustomPopover>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// defineOptions({
//   name: "CustomDropdown",
// });

const emits = defineEmits(["command"]);

const customDropdownRef = ref();

const childrenClick = function (command: any) {
  emits("command", command);
};
</script>

<style scoped lang="less"></style>
