<template>
  <span class="title">{{ text }}</span>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "项",
  },
});
</script>
<style scoped>
.title {
  height: 32px;
  display: inline-flex;
  line-height: 32px;
  vertical-align: bottom;
  font-size: var(--el-form-label-font-size);
  color: var(--el-text-color-regular);
  padding: 0 12px 0 0;
}
</style>
