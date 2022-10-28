<template>
  <el-input v-model="textareaValue" type="textarea"></el-input>
  <el-button v-copy:[copySuccess]="textareaValue">点击复制</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import { CustomMessage } from "src/components/CustomComponents/CustomMessage/index";
defineOptions({
  name: "/InstructionsCopy",
});
const textareaValue = ref("");
const copySuccess = function (value: any) {
  CustomMessage("info", "复制成功值为:" + value);
};
</script>

<style scoped lang="less"></style>
