<template>
  <CustomButton @click="btnClick">按钮</CustomButton>
  <CustomButton autofocus round circle type="primary" @click="btnClick"
    >12</CustomButton
  >
  <CustomButton plain round disabled nativeType="submit">默</CustomButton>
  <CustomButton circle @click="btnClick">钮</CustomButton>
  <CustomButton
    type="primary"
    size="small"
    plain
    round
    circle
    disabled
    autofocus
    loading
  >Lo</CustomButton>
  <CustomButton
    type="success"
    size="medium"
    plain
    round
    disabled
    loading
  >Lo</CustomButton>
  <CustomButton type="info" size="mini" plain round circle disabled
    >信</CustomButton
  >
  <CustomButton type="warning" plain round circle disabled>警</CustomButton>
  <CustomButton type="danger" plain round circle disabled>危</CustomButton>
</template>

<script setup lang="ts">
// defineOptions({
//   name: "CustomButtonTest",
// });
const btnClick = function (e: MouseEvent) {
  console.log("按钮", e);
};
</script>

<style scoped lang="less"></style>
