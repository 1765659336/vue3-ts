<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="Activity password">
        <el-input v-model="form.passWord" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Login, getSystemStyle } from "src/api/permissions";
import { reactive } from "vue";
import router from "src/router/index";
import { useStyleVariableStore, useUserInfoStore } from "src/store/index";
defineOptions({
  name: "/Login",
});
// 获取全局样式变量仓库
const styleVariableStore = useStyleVariableStore();
// 获取用户信息容器
const userInfoStore = useUserInfoStore();

// 表单数据
const form = reactive({
  userName: "",
  passWord: "",
});

const onSubmit = function () {
  Login(form).then((res) => {
    const { token, userId } = res.data.content;
    userInfoStore.changeToken(token);
    userInfoStore.changeUserId(userId);
    getSystemStyle(userId).then((res) => {
      styleVariableStore.changeMainColor(res.data.content.mainColor);
      styleVariableStore.changeMenuTriggerIconColor(
        res.data.content.menuTriggerIconColor
      );
      styleVariableStore.changeMenuTitleColor(res.data.content.menuTitleColor);
      styleVariableStore.changeMenuMainColor(res.data.content.menuMainColor);
    });

    /* 
        注意router.push不要写在login接口外面，因为没有Promise是异步任务，如果写在外面，
        router.push到index的时候，异步login任务还没有在本地和仓库中存储token，所以会重定向
        回login页面，登录按钮第一次点击并不会跳转，需要点第二下才会跳转
    */
    router.push({ path: "/index" });
  });
};
</script>

<style scoped lang="less"></style>
