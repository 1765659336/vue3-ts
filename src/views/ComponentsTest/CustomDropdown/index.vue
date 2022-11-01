<template>
  <CustomDropdown @command="click">
    <template #dropdown>
      <div class="div">触发</div>
    </template>
    <CustomDropdownItem command="a" :clickClose="false"
      >点击不会关闭</CustomDropdownItem
    >
    <CustomDropdownItem command="b">点击会关闭</CustomDropdownItem>
    <CustomDropdownItem command="c">点击会关闭</CustomDropdownItem>
  </CustomDropdown>
</template>

<script setup lang="ts">
// defineOptions({
//   name: "CustomDropdownTest",
// });

const click = function (command: any) {
  console.log(command);
};
</script>

<style scoped lang="less">
.div {
  width: 100px;
  height: 20px;
  background-color: red;
}
</style>
