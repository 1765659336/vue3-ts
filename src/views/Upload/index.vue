<template>
    <div>
        <upload-file></upload-file>
    </div>
</template>

<script setup lang="ts">
import UploadFile from 'src/components/UploadFile/index.vue'
defineOptions({
  name: "/UploadFileTest",
});
</script>

<style scoped lang="less">
@import url('./index.less');
</style>