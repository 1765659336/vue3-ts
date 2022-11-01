<template>
  <div class="div">
    <CustomCollapse @click="fn" :accordion="true">
      <CustomCollapseItem title="1" lock="lock1">content123</CustomCollapseItem>
      <CustomCollapseItem title="2" lock="lock2">content123</CustomCollapseItem>
      <CustomCollapseItem title="3" lock="lock3">content123</CustomCollapseItem>
    </CustomCollapse>
  </div>
</template>

<script setup lang="ts">
import CustomCollapse from "src/components/CustomComponents/CustomCollapse/index.vue";
import CustomCollapseItem from "src/components/CustomComponents/CustomCollapseItem/index.vue";
// defineOptions({
//   name: "CustomCollapseTest",
// });

const fn = function (e: MouseEvent, lock: any) {
  console.log("容器", e, lock);
};
</script>

<style scoped lang="less">
.div {
  width: 600px;
  border: 1px solid #ccc;
}
</style>
