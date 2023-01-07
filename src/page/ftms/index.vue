<template>
    <h2 style="text-align: center;">2023年1月份留资数据格式化</h2>
    <uploadVue @change="handleChange" />
</template>
<script setup lang="ts">
import { ElMessage, UploadRawFile } from 'element-plus';
import { importFromXlsx,exportToXlsx } from './composable/excel-util';
import uploadVue from './component/upload.vue';
import useParseData from "./composable/useParseData"
import { DataType, SeriesKeyType } from "./contants/constans";

const handleChange = (rawFile: UploadRawFile) => {
    importFromXlsx(rawFile).then(res => {
        const { series, list } = res as { series: SeriesKeyType, list: DataType[] };
        useParseData(series, list);
        exportToXlsx(list, series);
    }).catch(e => { ElMessage.error(e.message); console.error(e) });
}

</script>