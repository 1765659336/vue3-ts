<template>
  <div class="custom-checkbox-container">
    <input
      ref="checkboxRef"
      type="checkbox"
      name="scales"
      v-model="inputValue"
      :disabled="props.disabled"
      :id="props.label"
      @change="inputValueChange"
    />
    <label :for="props.label">{{ props.label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// defineOptions({
//   name: "CustomCheckbox",
// });

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});
const emits = defineEmits(["update:modelValue"]);

const checkboxRef = ref();

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});

const inputValueChange = function (value: Event) {
  inputValue.value = value.target?.checked;
};
</script>

<style scoped lang="less"></style>
