<template>
  <h2 style="text-align: center">2023年1月份留资数据格式化</h2>
  <TipAlert />
  <el-row :gutter="20">
    <el-col :span="12">
      <SnForm />
      <TipDescription />
    </el-col>
    <el-col :span="12">
      <UploadTypeRadio v-model="uploadType" />
      <SnUpload @change="handleChange" />
    </el-col>
  </el-row>
  <SheetDialog
    v-model:sheetIndex="sheetDialogConfig.sheetIndex"
    v-model:visible="sheetDialogConfig.visible"
    :sheet-names="sheetDialogConfig.sheetNames"
    @select="handleSheetSelect"
    :file-name="sheetDialogConfig.fileName"
  />
</template>
<script setup lang="ts">
import { ElMessage, UploadRawFile } from "element-plus";
import { importXlsx } from "./composable/excel-util";
import useFtms from "./composable/useFtms";
import { WorkBook } from "xlsx";

const {
  uploadType,
  sheetDialogConfig,
  openSheetDialog,
  workBook,
  handleSheetSelect,
} = useFtms();

const handleChange = (rawFile: UploadRawFile) => {
  importXlsx(rawFile)
    .then((res) => {
      let wb = res as WorkBook;
      workBook.value = wb;
      openSheetDialog(rawFile.name, workBook.value.SheetNames);
    })
    .catch((e) => {
      workBook.value = undefined;
      ElMessage.error(e.message);
      console.error(e);
    });
};
</script>
