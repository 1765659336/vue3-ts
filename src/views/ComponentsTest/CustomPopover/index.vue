<template>
  <CustomPopover content="Hello World" title="标题">
    <template #reference>
      <div class="div">点我</div>
    </template>
  </CustomPopover>

  <div class="Gap"></div>

  <CustomPopover content="Hello World" title="标题">
    <template #reference>
      <div class="div2">点我</div>
    </template>
  </CustomPopover>
  <div>被挤开了吗</div>
</template>

<script setup lang="ts">
import CustomPopover from "src/components/CustomComponents/CustomPopover/index.vue";
defineOptions({
  name: "CustomPopoverTest",
});
</script>

<style scoped lang="less">
.div {
  width: 200px;
  height: 20px;
  background-color: red;
}
.div2 {
  width: 50px;
  height: 20px;
  background-color: green;
}

.Gap {
  width: 200px;
  display: inline-block;
}
</style>
