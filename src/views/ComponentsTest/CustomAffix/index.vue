<template>
  <CustomAffix>
    <div>固定</div>
  </CustomAffix>
  <div class="test-div"></div>
</template>

<script setup lang="ts">
import CustomAffix from "src/components/CustomComponents/CustomAffix/index.vue";
defineOptions({
  name: "/CustomAffixTest",
});
</script>

<style scoped lang="less">
.test-div {
  width: 200%;
  height: 500%;
  overflow: auto;
}
</style>
