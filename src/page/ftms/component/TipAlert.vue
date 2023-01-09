<template>
  <el-alert :title="alert1.title" type="error" :closable="closable" v-if="alert1.show" />
  <el-alert :title="alert2.title" type="error" :closable="closable" v-if="alert2.show" />
</template>
<script setup lang="ts">
import { ElAlert } from "element-plus";
import { SeriesKeyList } from "../contants/constans";
import { useFtmsStore } from "../stores/ftms";

const { seriesList } = storeToRefs(useFtmsStore());

const closable = ref(false);

const alert1 = computed(() => {
  let show: boolean = seriesList.value[SeriesKeyList[0].label].length == 0;
  return {
    title: `${SeriesKeyList[0].text} 数据不存在`,
    show,
  };
});

const alert2 = computed(() => {
  let show: boolean = seriesList.value[SeriesKeyList[1].label].length == 0;
  return {
    title: `${SeriesKeyList[1].text} 数据不存在`,
    show,
  };
});
</script>
<style scoped>
.el-alert {
  margin: 10px 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
