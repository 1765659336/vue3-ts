<template>
  <div class="custom-timeline-container">
    <slot name="time-value">
      <span class="custom-timeline-time">{{ props.timeValue }}</span>
    </slot>
    <div class="custom-timeline-icon-position">
      <slot name="icon-value"><div class="custom-timeline-icon"></div></slot>
    </div>
    <div class="custom-timeline-content">
      <slot>{{ props.contentValue }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
defineOptions({
  name: "/CustomTimeline",
});
const props = defineProps({
  timeValue: {
    type: String,
  },
  contentValue: {
    type: Object as PropType<any>,
  },
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
