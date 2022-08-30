<template>
  <div>index35</div>
</template>

<script setup lang="ts">
import { GetAllUserPageRoute } from "src/api/permissions";
import { onMounted } from "vue";
onMounted(() => {
  GetAllUserPageRoute().then((res) => {
    console.log(res);
  });
});
</script>

<style scoped lang="less"></style>