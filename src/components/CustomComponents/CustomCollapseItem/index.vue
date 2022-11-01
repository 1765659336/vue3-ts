<template>
  <div class="custom-collapse-item-container">
    <div class="custom-collapse-item-title">
      <slot name="title"
        ><span>{{ props.title }}</span
        ><span
          @click="contentShowChange"
          class="custom-collapse-item-title-icon"
          >V</span
        ></slot
      >
    </div>
    <!-- slot实际上是一个抽象元素，有点类似template，本质上并不是一个元素。
      而v-show是通过控制元素的display来进行显示隐藏的，slot本质上并不是元素，
      所以压根也就不会有display这个css属性。 -->
    <slot v-if="contentShow"></slot>
  </div>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  PropType,
  ref,
} from "vue";

// defineOptions({
//   name: "CustomCollapseItem",
// });

const currentInstance: ComponentInternalInstance | null = getCurrentInstance();

const props = defineProps({
  // 标题
  title: {
    type: Object as PropType<any>,
  },
  // 手风琴模式唯一标识
  lock: {
    type: Object as PropType<any>,
  },
});

const contentShow = ref(false);

/* 
  @accordion 说明开启了手风琴功能CustomCollapse
  组件中CollapseFn方法中使用，防止互相调用，导致调用栈溢出
  @value 开启了手风琴功能CustomCollapse组件中CollapseFn方法
  中使用,将其它的折叠面板关闭
*/
const contentShowChange = function (
  e: MouseEvent,
  accordion: Boolean = true,
  value: undefined
) {
  // 当开启手风琴模式时，要去调用CustomCollapse组件的状态处理函数
  if (currentInstance && currentInstance.parent && accordion) {
    currentInstance.parent.setupState.CollapseFn &&
      currentInstance.parent.setupState.CollapseFn(e, props.lock);
  }
  e.stopPropagation();
  if (value === undefined) {
    contentShow.value = !contentShow.value;
  } else {
    contentShow.value = value;
  }
};

onMounted(() => {
  /* 当CustomCollapse组件开启了手风琴模式，并且CustomCollapseItem组件接收到了唯一标识lock,
    将CustomCollapseItem组件的控制开关方法传递给CustomCollapse保存起来
  */
  if (
    props.lock &&
    currentInstance &&
    currentInstance.parent &&
    currentInstance.parent.props.accordion
  ) {
    currentInstance.parent.setupState.childrenFun[props.lock] =
      contentShowChange;
  }
});
</script>

<style scoped lang="less">
.custom-collapse-item-title {
  border-bottom: 1px solid #ccc;
  margin: 10px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  .custom-collapse-item-title-icon {
    cursor: pointer;
  }
}
</style>
