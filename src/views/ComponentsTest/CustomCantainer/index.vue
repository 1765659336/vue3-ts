<template>
  <CustomCantiner>
    <CustomHeader>Header</CustomHeader>
    <CustomAside>Aside</CustomAside>
    <CustomMain>Main</CustomMain>
    <CustomFooter>Footer</CustomFooter>
  </CustomCantiner>
</template>

<script setup lang="ts">
import CustomCantiner from "src/components/CustomComponents/CustomCantainer/index.vue";
import CustomHeader from "src/components/CustomComponents/CustomHeader/index.vue";
import CustomFooter from "src/components/CustomComponents/CustomFooter/index.vue";
import CustomAside from "src/components/CustomComponents/CustomAside/index.vue";
import CustomMain from "src/components/CustomComponents/CustomMain/index.vue";

// defineOptions({
//   name: "CustomCantinerTest",
// });
</script>

<style scoped lang="less"></style>
