<template>
  <div>
    <img
      v-real-img="
        'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
      "
      src="./images/error.jpg"
    />
    <img
      v-real-img="'图片地址错误，模拟图片加载错误'"
      src="./images/error.jpg"
    />
    <img src="./images/error.jpg" id="img" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
img {
    width: 200px;
    height: 200px;
}
</style>