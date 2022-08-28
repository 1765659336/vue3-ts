import { reactive } from "vue";

<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { login } from "src/api/permissions";
import { reactive } from "vue";
import { useUserInfoStore } from "src/store/index";
import router from "src/router/index";

const UserInfoStore = useUserInfoStore();
const form = reactive({
  name: "",
  password: "",
});

const onSubmit = function () {
  login(form).then((res) => {
    console.log(res);
    UserInfoStore.changeToken(res.data.content.token);
    /* 
        pinia页面刷新数据重置，在session中存一份，在store中默认先去读session中的数据
        session当应用关闭时清空，下次点开访问系统需要重新登录
    */
    sessionStorage.setItem("token", res.data.content.token);
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
