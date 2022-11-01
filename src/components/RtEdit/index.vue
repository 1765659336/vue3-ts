<template>
  <Vue3Tinymce
    v-model="content"
    :setting="classic_setting"
    @change="changeContent"
    @init="init"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// 引入组件 npm i @/jsdawn/vue3-tinymce
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
// defineOptions({
//   name: "/RtEdit",
// });

// 图片上传回调函数
const uploadImage = function (res) {
  console.log("图片上传回调函数");
  console.log(res);
};

const classic_setting = {
  height: "100%", // 高度自适应外部容器
  width: "50%",
  fixed_toolbar_container: "#mytoolbar", // 将工具栏固定在容器的顶部
  branding: false, // 是否显示右下角的vue3-tinymce官方水印
  custom_ui_selector: ".my-custom-button", // 将其它元素添加成富文本编辑器的成员，点击按钮的时候，富文本编辑器不会触发该editor失去焦点 blur事件 通过css选择器来选择
  elementpath: false, // 是否开启左下角html元素路径
  // toolbar:
  //   "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
  // toolbar_drawer: "sliding",
  // quickbars_selection_toolbar:
  //   "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
  toolbar:
    "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",
  plugins: "link image media table lists fullscreen quickbars",
  // fontsize_formats: "12px 14px 16px 18px",
  // default_link_target: "_blank",
  // link_title: false,
  nonbreaking_force_tab: true,
  // 以中文简体为例
  language: "zh_CN",
  language_url:
    "../node_modules/@jsdawn/vue3-tinymce/dist/tinymce/langs/zh_CN.js",
  // 自定义 图片上传模式
  custom_images_upload: true,
  images_upload_url: "your_upload_api_url...", // 图片上传路径
  custom_images_upload_callback: uploadImage, // 图片上传回调函数
  custom_images_upload_param: { id: "xxxx01", age: 18 }, // 图片上传接口的参数
};

const content = ref("123");

// 编辑器内容改变的回调函数
const changeContent = function (content: string) {
  console.log(content);
};

// 初始化完成
const init = function (editor: null) {
  console.log("初始化");
  console.log(editor);
};

const getContent = function () {
  return content.value;
};

defineExpose({});
</script>
<style scoped lang="less"></style>
