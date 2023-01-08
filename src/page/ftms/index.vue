<template>
    <h2 style="text-align: center;">2023年1月份留资数据格式化</h2>
    <uploadVue @change="handleChange" />
    <SnForm />
</template>
<script setup lang="ts">
import { ElMessage, UploadRawFile } from 'element-plus';
import { importFromXlsx, exportToXlsx } from './composable/excel-util';
import uploadVue from './component/upload.vue';
import useParseData from "./composable/useParseData"
import SnForm from './component/SnForm.vue';

const handleChange = (rawFile: UploadRawFile) => {
    importFromXlsx(rawFile).then(res => {
        const { series, list } = useParseData(res as [], rawFile.name);
        exportToXlsx(list, series);
    }).catch(e => { ElMessage.error(e.message); console.error(e) });
}

</script>