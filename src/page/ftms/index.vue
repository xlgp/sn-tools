<template>
    <h2 style="text-align: center;">2023年1月份留资数据格式化</h2>
    <UploadTypeRadio v-model="uploadType" />
    <uploadVue @change="handleChange" />
    <SnForm />
</template>
<script setup lang="ts">
import { ElMessage, UploadRawFile } from 'element-plus';
import { importFromXlsx } from './composable/excel-util';
import uploadVue from './component/upload.vue';
import UploadTypeRadio from './component/UploadTypeRadio.vue'
import SnForm from './component/SnForm.vue';
import { useFtmsStore } from './stores/ftms';
import { ImportXlsxType } from "./data";
import useFtms from './composable/useFtms';

const store = useFtmsStore();
const { sheetIndex, uploadTypeRadioKeyList } = storeToRefs(store);

const uploadType = ref(uploadTypeRadioKeyList.value[0].id);
watch(uploadType,(b,v)=>console.log(b,v));
const handleChange = (rawFile: UploadRawFile) => {
    importFromXlsx(rawFile, sheetIndex.value).then(res => {
        useFtms({ res: res as ImportXlsxType, fileName: rawFile.name, uploadType });
    }).catch(e => { ElMessage.error(e.message); console.error(e) });
}
</script>