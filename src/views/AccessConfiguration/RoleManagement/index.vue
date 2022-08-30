<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column prop="name" label="角色名称" width="120" />
    <el-table-column fixed="right" label="操作列" width="400">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="updateRow(scope)"
          >编辑</el-button
        >
        <el-button link type="primary" size="small" @click="deleteRow(scope)">
          删除
        </el-button>
        <el-button link type="primary" size="small" @click="drawer = !drawer"
          >分配用户</el-button
        >
        <el-button link type="primary" size="small" @click="drawer = !drawer"
          >分配页面</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
    >新增角色</el-button
  >
  <el-drawer v-model="drawer" direction="rtl">
    <template #title>
      <h4>选择配置的人员</h4>
    </template>
    <template #default>
      <span>搜索</span>
      <span>列表查询，虚拟滚动</span>
      <div v-for="(item, index) in 100" :key="index">人员{{ item }}</div>
    </template>
    <template #footer>
      <div>
        <el-button @click="cancelClick">关闭</el-button>
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="RoleManagement">
import { ElMessageBox } from "element-plus";
import { getRoles, deleteRole, postRole, putRole } from "src/api/permissions";
import { IRoleTableItem, RoleTable } from "src/constraint/tablesCommon";
import { reactive, ref } from "vue";

const tableData = reactive<RoleTable>([]);

const updateRow = (scope: { $index: number; row: IRoleTableItem }) => {
  ElMessageBox.confirm("确认删除?", "系统提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      putRole({ roleId: scope.row.roleId, name: "edit" }).then((res) => {
        console.log(res);
      });
    })
    .catch(() => {});
};

const deleteRow = (scope: { $index: number; row: IRoleTableItem }) => {
  ElMessageBox.confirm("确认删除?", "系统提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      tableData.splice(scope.$index, 1);
      deleteRole(scope.row.roleId).then((res) => {
        console.log(res);
      });
    })
    .catch(() => {});
};

const onAddItem = () => {
  postRole({ name: "oa" }).then((res) => {
    console.log(res);
  });
};
const drawer = ref(false);
function cancelClick() {
  drawer.value = false;
}
function confirmClick() {
  ElMessageBox.confirm(`确认保存?`)
    .then(() => {
      drawer.value = false;
    })
    .catch(() => {
      // catch error
    });
}

getRoles().then((res) => {
  console.log(res);
  res.data.content.forEach((element: IRoleTableItem) => {
    tableData.push(element);
  });
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
