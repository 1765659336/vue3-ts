<template>
  <div>
    <CustomSignature
      @saveCallbackBase="saveCallbackBase"
      @saveCallbackBlob="saveCallbackBlob"
      :lineWidth="5"
      strokeStyle="red"
    ></CustomSignature>
  </div>
</template>

<script setup lang="ts">
import CustomSignature from "src/components/CustomComponents/CustomSignature/index.vue";
// defineOptions({
//   name: "CustomSignatureTest",
// });
const saveCallbackBase = function (base: any) {
  console.log(base);
};
const saveCallbackBlob = function (blob: any) {
  console.log(blob);
};
</script>

<style scoped lang="less"></style>
