<template>
  <CustomBadge><div class="div">div</div></CustomBadge>
  <br />
  <br />
  <br />
  <CustomBadge :modelValue="100"><div class="div">div</div></CustomBadge>
  <br />
  <br />
  <br />
  <CustomBadge modelValue="热卖"><CustomTag>div</CustomTag></CustomBadge>
  <br />
  <br />
  <br />
  <CustomBadge modelValue="敬请期待"><CustomTag>div</CustomTag></CustomBadge>
  <br />
  <br />
  <br />
  <CustomBadge modelValue="hot"><CustomTag>div</CustomTag></CustomBadge>
  <br />
  <br />
  <br />
  <CustomBadge
    modelValue="very hot"
    :initStyle="{
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(64, 158, 255)',
    }"
    ><CustomTag>div</CustomTag></CustomBadge
  >
</template>

<script setup lang="ts">
import CustomBadge from "src/components/CustomComponents/CustomBadge/index.vue";
import CustomTag from "src/components/CustomComponents/CustomTag/index.vue";
// defineOptions({
//   name: "CustomBadgeTest",
// });
</script>

<style scoped lang="less">
.div {
  width: 100px;
  height: 30px;
  border: 1px solid #000;
}
</style>
