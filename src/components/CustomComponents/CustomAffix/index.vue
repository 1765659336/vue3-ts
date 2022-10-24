<template>
  <div
    class="custom-affix-container"
    ref="customAffixContainerRef"
    :style="renderStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/*
fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。
top优先级比bottom高
left优先级比right高
 */
import { onMounted, PropType, reactive, Ref, ref } from "vue";

defineOptions({
  name: "/CustomAffix",
});

const props = defineProps({
  target: {
    type: Object as PropType<Ref<HTMLElement>>,
  },
  top: {
    type: Number,
  },
  left: {
    type: Number,
  },
  right: {
    type: Number,
  },
  bottom: {
    type: Number,
  },
});

const renderStyle: {
  position?: String;
  top?: String;
  left?: String;
} = reactive({});

const fixed: {
  top?: number;
  left?: number;
} = reactive({});

const customAffixContainerRef = ref();

const throttle = function (callback: Function, delay: number) {
  let timer: null | NodeJS.Timeout = null;
  return function () {
    let context: any = this;
    if (!timer) {
      timer = setTimeout(function () {
        callback.apply(context, arguments);
        timer = null;
      }, delay);
    }
  };
};
const fn = function () {
  const initialOosition = customAffixContainerRef.value.getBoundingClientRect();
  let scrollDirection;
  if (
    (window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) !== fixed.top
  ) {
    console.log("column");
    scrollDirection = "column";
  } else {
    console.log("row");
    scrollDirection = "row";
  }
  if (scrollDirection === "column" && props.top) {
    fixed.top =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (fixed.top + props.top >= initialOosition.top) {
      renderStyle.position = "fixed";
      renderStyle.top = props.top + "px";
    } else if (fixed.top + props.top < initialOosition.top) {
      renderStyle.position = "static";
    }
  }

  if (scrollDirection === "row" && props.left) {
    fixed.left =
      window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft;
    if (fixed.left + props.left >= initialOosition.left) {
      renderStyle.position = "fixed";
      renderStyle.left = props.left + "px";
    } else if (fixed.left + props.left < initialOosition.left) {
      renderStyle.position = "static";
    }
  }
};
onMounted(() => {
  window.addEventListener("scroll", throttle(fn, 50));
});
</script>

<style scoped lang="less"></style>
