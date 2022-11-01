<template>
  <CustomBadge :modelValue="100"
    ><CustomTag>数字超过99变为99+</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge modelValue="热卖"><CustomTag>中文</CustomTag></CustomBadge>
  <br />
  <br />
  <CustomBadge modelValue="hot" fontSize="20px"
    ><CustomTag>自定义字体大小</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge modelValue="敬请期待"
    ><CustomTag>超过3个字会显示...</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge
    modelValue="very hot"
    :initStyle="{
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(64, 158, 255)',
    }"
    ><CustomTag>自定义字体颜色和背景色</CustomTag></CustomBadge
  >
  <br />
  <br />
  <CustomBadge>
    <template #dot>
      <div>dot插槽</div>
    </template>
    <div class="div">默认插槽</div>
  </CustomBadge>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.div {
  width: 100px;
  height: 30px;
  border: 1px solid #000;
}
</style>
