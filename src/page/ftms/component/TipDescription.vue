<template>
  <el-descriptions border title="车系资料">
    <el-descriptions-item :label="item1.label">{{ item1.desc }}</el-descriptions-item>
    <el-descriptions-item :label="item2.label">{{ item2.desc }}</el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { SeriesKeyList } from '../contants/constans';
import { useFtmsStore } from '../stores/ftms';

const { seriesList } = storeToRefs(useFtmsStore());

const item1 = computed(() => {
  return {
    label: SeriesKeyList[0].text,
    desc: `${seriesList.value[SeriesKeyList[0].label].length}条`
  }
});

const item2 = computed(() => {
  return {
    label: SeriesKeyList[1].text,
    desc: `${seriesList.value[SeriesKeyList[1].label].length}条`
  }
});

</script>
