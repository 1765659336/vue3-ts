<template>
  <CustomButton type="primary" @click="createNode">Message</CustomButton>
</template>

<script setup lang="ts">
import { CustomMessage } from "../../../../src/components/CustomComponents/CustomMessage/index";
// defineOptions({
//   name: "CustomMessageTest",
// });
// 调试测试CustomMessage消息提示组件
const createNode = function () {
  CustomMessage.error("报错", 3000, true);
  CustomMessage("success", "success");
};
</script>

<style scoped lang="less"></style>
