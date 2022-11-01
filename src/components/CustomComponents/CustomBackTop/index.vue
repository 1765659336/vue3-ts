<template>
  <div
    class="custom-back-top-container"
    :style="renderStyle"
    @click="backTop"
    v-show="isShow"
  >
    <slot>默认值</slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";

// defineOptions({
//   name: "CustomBackTop",
// });

const props = defineProps({
  right: {
    type: Number,
    default: () => {
      return 0;
    },
  },
  bottom: {
    type: Number,
    default: () => {
      return 0;
    },
  },
  hiddenValue: {
    type: Number,
    default: () => {
      return 0;
    },
  },
  animationTime: {
    type: Number,
    default: () => {
      return 5;
    },
  },
});
const renderStyle = computed(() => {
  return { right: props.right + "px", bottom: props.bottom + "px" };
});

const isShow = ref(false);

const timer = ref();

const backTop = function () {
  timer.value = setInterval(() => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      clearInterval(timer.value);
    }
    document.body.scrollTop = document.documentElement.scrollTop = Math.floor(
      scrollTop * 0.9
    );
  }, props.animationTime);
};

onMounted(() => {
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > props.hiddenValue
  ) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
  window.addEventListener("scroll", () => {
    // 再次滚动时，移除上一次的动画
    const scrollY =
      document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollY, props.hiddenValue);
    if (scrollY > props.hiddenValue) {
      isShow.value = true;
    } else {
      isShow.value = false;
    }
  });
});
</script>

<style scoped lang="less">
.custom-back-top-container {
  position: fixed;
  cursor: pointer;
}
</style>
