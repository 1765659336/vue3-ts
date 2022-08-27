<!-- 查看简历 -->
<template>
</template>

<script setup lang="ts" name="CheckResume">
import CardContainer from "src/components/CardContainer/index.vue";
import CardItem from "src/components/CardContainer/components/CardItem/index.vue";
import Timeline from "src/components/Timeline/index.vue";
import { onMounted } from "vue";

onMounted(() => {
	console.log(123);
});
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
