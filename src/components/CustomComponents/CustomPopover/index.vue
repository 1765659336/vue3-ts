<template>
  <div
    class="custom-popover-container"
    :style="{ '--custom-popover-reference-width--': minWidth }"
  >
    <div
      class="custom-popover-reference"
      @click="showChange"
      ref="customPopoverReferenceRef"
    >
      <slot name="reference"></slot>
      <div class="custom-popover-position" v-show="isShow">
        <div class="custom-popover-triangle"></div>
        <div class="custom-popover-title">
          <span>{{ props.title }}</span>
        </div>
        <div class="custom-popover-content">
          <span>{{ props.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, Ref, ref } from "vue";
defineOptions({
  name: "CustomPopover",
});

const props = defineProps({
  content: {
    type: Object as PropType<any>,
  },
  title: {
    type: Object as PropType<any>,
  },
  minWidth: {
    type: Number,
    default: () => {
      return 100;
    },
  },
});

const customPopoverReferenceRef = ref();
const isShow = ref(false);

const showChange = function () {
  isShow.value = !isShow.value;
};

const minWidth: Ref<string | undefined> = ref();

onMounted(() => {
  /*
   */
  if (customPopoverReferenceRef.value) {
    if (customPopoverReferenceRef.value.clientWidth <= 100) {
      minWidth.value = props.minWidth + "px";
    } else {
      minWidth.value = customPopoverReferenceRef.value.clientWidth + "px";
    }
  }
});
</script>

<style scoped lang="less">
/* 
脱离文档流，也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。
float脱离文档流：使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围。
绝对定位absolute脱离文档流：使用absolute脱离文档流的元素，其他盒子与其他盒子内的文本都会无视它
*/
.custom-popover-container {
  display: inline-block;
  .custom-popover-reference {
    position: relative;
    display: inline-block;
  }

  .custom-popover-position {
    position: absolute;
    min-height: 10px;
    left: 50%;
    width: var(--custom-popover-reference-width--);
    transform: translate(-50%, 10px);
    border: 1px solid #ccc;
    border-radius: 5px;

    .custom-popover-triangle {
      position: absolute;
      border-style: solid;
      border-width: 10px 10px 10px 10px;
      border-color: transparent transparent #ccc transparent;
      width: 0px;
      height: 0px;
      transform: translate(-50%, -20px);
      left: 50%;
    }
  }
}
</style>
