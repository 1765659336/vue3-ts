<template>
  <div class="container">
    <CustomAffix :top="100">
      <div>固定顶部100px</div>
    </CustomAffix>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
  height: 600px;
  overflow: auto;
}
</style>
