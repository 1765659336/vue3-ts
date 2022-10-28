<template>
  <div class="container up-down-center">
    <el-form ref="formRef" :model="formData" :rules="formRulesFun()">
      <el-form-item label="模态宽度" prop="modalWidth">
        <el-input
          v-model="formData.modalWidth"
          placeholder="支持px,em,%,vh,vw格式的数据"
        ></el-input>
      </el-form-item>
      <el-form-item label="模态高度" prop="modalHeight">
        <el-input
          v-model="formData.modalHeight"
          placeholder="支持px,em,%,vh,vw格式的数据"
        ></el-input>
      </el-form-item>
      <el-form-item label="是否显示遮罩层">
        <el-switch v-model="formData.modalMaskShow" />
      </el-form-item>
    </el-form>
    <el-button @click="save">确定</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { reactive, Ref, ref } from "vue";
defineOptions({
  name: "/ModalConfig",
});
const formRef: Ref<FormInstance | null> = ref(null);
const formData = reactive<{
  modalWidth: string | number;
  modalHeight: string | number;
  modalMaskShow: boolean;
}>({
  modalWidth: "",
  modalHeight: "",
  modalMaskShow: false,
});
const formRulesFun = (): FormRules => {
  // 校验宽高是否是限制的几种格式
  const correctFormatFun = (rule: any, value: any, callback: any) => {
    // 使用正则判断
    callback();
  };
  return {
    modalWidth: [
      { required: true, message: "必填项", trigger: "change" },
      {
        validator: correctFormatFun,
        trigger: "change",
      },
    ],
    modalHeight: [
      { required: true, message: "必填项", trigger: "change" },
      {
        validator: correctFormatFun,
        trigger: "change",
      },
    ],
  };
};
const save = function () {
  if (formRef.value) {
    formRef.value.validate((valid, fields) => {
      console.log(valid);
      if (valid) {
        // 调用远程接口保存当前用户当前模态的配置信息
        ElMessage.success("保存成功");
      } else {
        ElMessage.warning("请按提示输入正确的内容");
      }
    });
  }
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
