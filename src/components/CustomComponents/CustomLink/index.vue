<template>
  <a
    :class="renderClass()"
    :style="renderStyle()"
    @click="clickFun"
    :href="props.url"
    :target="props.target"
    :disabled="disabled"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";

// defineOptions({
//   name: "CustomLink",
// });

const props = defineProps({
  mainColor: {
    type: String,
    default: () => {
      return "#54138c";
    },
  },
  url: {
    type: String,
    default: () => {
      return "";
    },
  },
  target: {
    type: String,
    default: () => {
      return "_self";
    },
  },
  disabled: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  openUnderline: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
});

const emits = defineEmits(["clickCallback", "update:disabled"]);

const disabled = computed({
  get: () => {
    return props.disabled;
  },
  set: () => {
    emits("update:disabled");
  },
});

const renderClass = function () {
  return {
    "custom-link-container": true,
    "custom-link-open-underline": props.openUnderline,
  };
};

const renderStyle = function () {
  return {
    "--main-color--": props.mainColor,
    "--cursor--": props.disabled ? "not-allowed" : "pointer",
  };
};
const clickFun = function (e: MouseEvent) {
  if (disabled) {
    e.preventDefault();
  } else {
    if (props.url === "") {
      e.preventDefault();
      emits("clickCallback", e);
    }
  }
};
</script>

<style scoped lang="less">
.custom-link-container {
  font-size: 14px;
  display: inline-block;
  line-height: 16px;
  min-height: 16px;
  text-align: center;
  color: var(--main-color--);
  margin: 0 2px;
  cursor: var(--cursor--);
  padding: var(--open-underline--);
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
}

.custom-link-open-underline {
  position: relative;

  &::after {
    content: "";
    width: 100%;
    /* 伪元素是行内元素 */
    display: block;
    height: 2px;
    background-color: var(--main-color--);
    transform: scale(0);
    transition: all 0.2s;
    position: absolute;
    bottom: -2px;
  }

  &:hover::after {
    transform: scale(1);
  }
}
</style>
