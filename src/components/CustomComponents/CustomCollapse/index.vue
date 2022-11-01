<template>
  <div class="custom-collapse-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  reactive,
  RendererElement,
  RendererNode,
} from "@vue/runtime-core";
import { VNode } from "vue";

// defineOptions({
//   name: "CustomCollapse",
// });

const currentInstance: ComponentInternalInstance | null = getCurrentInstance();

const props = defineProps({
  // 是否开启手风琴模式
  accordion: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});

// 存放CustomCollapse下所有的CustomCollapseItem的状态函数
const childrenFun: { [k: string]: Function } = reactive({});

const CollapseFn = function (e: MouseEvent, lock: any) {
  // 当开启手风琴模式，处理所有CustomCollapseItem的状态
  if (props.accordion) {
    const children:
      | VNode<
          RendererNode,
          RendererElement,
          {
            [key: string]: any;
          }
        >[]
      | undefined =
      currentInstance?.slots.default && currentInstance?.slots.default();
    if (children) {
      for (let i = 0; i < children.length; i++) {
        if (children[i].props.lock !== lock) {
          console.log(children[i].props.lock);
          childrenFun[children[i].props.lock](e, false, false);
        }
      }
    }
  }
  // 当任意一个CustomCollapseItem组件关闭开启时，通知外部的回调事件
  emits("click", e, lock);
};

const emits = defineEmits(["click"]);
</script>

<style scoped lang="less"></style>
