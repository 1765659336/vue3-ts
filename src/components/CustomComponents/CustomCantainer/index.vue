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
import { onMounted, PropType, ref } from "vue";

defineOptions({
  name: "CustomCantainer",
});

const props = defineProps({
  flexDirection: {
    type: Object as PropType<"wrap" | "nowrap">,
    default: () => {
      return "nowrap";
    },
  },
});

const flexDirection = ref(props.flexDirection);

const containerRef = ref();
onMounted(() => {
  for (let obj of containerRef.value.__vnode.children[0].children) {
    if (obj.type.name == "CustomHeader" || obj.type.name == "CustomFooter") {
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
