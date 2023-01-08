<template>
    <h2 style="text-align: center;">2023年1月份留资数据格式化</h2>
    <UploadTypeRadio v-model="uploadType" />
    <uploadVue @change="handleChange" />
    <SnForm />
</template>
<script setup lang="ts">
import { ElMessage, UploadRawFile } from 'element-plus';
import { importFromXlsx, exportToXlsx } from './composable/excel-util';
import uploadVue from './component/upload.vue';
import UploadTypeRadio from './component/UploadTypeRadio.vue'
import useParseData, { getSeries } from "./composable/useParseData"
import SnForm from './component/SnForm.vue';
import { KLUGER, RAV4, uploadTypeRadioKList } from './contants/constans';
import { useFtmsStore } from './stores/ftms';
import { SeriesType } from "./data";

const { saveSeries } = useFtmsStore();

const uploadType = ref(uploadTypeRadioKList[0].id);

const handleChange = (rawFile: UploadRawFile) => {
    importFromXlsx(rawFile).then(res => {

        let series = getSeries(rawFile.name);

        if (uploadType.value == uploadTypeRadioKList[0].id) { //数据

            const list = useParseData(res as [], series);
            exportToXlsx(list, series);

        } else if (uploadType.value == KLUGER || uploadType.value == RAV4) {
            saveSeries(res as SeriesType[], uploadType.value);
        }else {
            throw new Error("类型错误");
        }

    }).catch(e => { ElMessage.error(e.message); console.error(e) });
}

</script>