<template>
  <div
    class="custom-container-container"
    :style="{ '--flex-direction--': flexDirection }"
    ref="containerRef"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// defineOptions({
//   name: "CustomCantainer",
// });

const flexDirection = ref("nowrap");

const containerRef = ref();

onMounted(() => {
  for (let obj of containerRef.value.__vnode.children[0].children) {
    // 使用obj.type.name来判断是否有CustomHeader或CustomFooter组件来改为垂直布局，当不使用defineOption时，组件的名称默认为文件名即index
    if (
      obj.el.className == "custom-header-container" ||
      obj.type.name == "custom-footer-container"
    ) {
      flexDirection.value = "wrap";
    }
  }
});
</script>

<style scoped lang="less">
.custom-container-container {
  display: flex;
  flex-direction: "row";
  flex-wrap: var(--flex-direction--);
}
</style>
