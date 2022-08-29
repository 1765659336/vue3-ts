<template>
  <div>1-1</div>
  <div v-for="item in btnArray" :key="item.btnName">{{ item.btnName }}</div>
</template>

<script setup lang="ts">
import useBtnPermissions from "src/hooks/useBtnPermissions";

const { btnArray } = useBtnPermissions();
</script>

<style scoped></style>
