<template>
  <CustomLink
    @clickCallback="clickFun"
    url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    >文字描述当前窗口跳转</CustomLink
  >
  <CustomLink
    mainColor="green"
    target="_blank"
    url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
    >文字描述小窗口打开</CustomLink
  >
  <CustomLink mainColor="#fc5531" :disabled="disabled">禁止点击</CustomLink>
  <CustomLink mainColor="rgba(67, 173, 127, .5)" v-model:disabled="disabled"
    >禁止点击v-model</CustomLink
  >
  <CustomLink :openUnderline="false">不开启下划线</CustomLink>
  <CustomLink
    ><div
      :style="{ width: '300px', height: '300px', backgroundColor: 'red' }"
    ></div
  ></CustomLink>
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineOptions({
//   name: "CustomLinkTest",
// });

const disabled = ref(true);

const clickFun = function (e: MouseEvent) {
  console.log(e);
};
</script>

<style scoped lang="less"></style>
