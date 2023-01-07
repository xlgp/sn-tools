<template>
    <el-upload drag ref="uploadRef" action="" :on-change="handleChange" :on-exceed="handleExceed" :limit="1"
        :accept="acceptType" :auto-upload="false">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
        </div>
    </el-upload>
</template>
<script setup lang="ts">
import { ElUpload, UploadInstance, UploadFile, UploadFiles } from 'element-plus';
import useUpload from '../composable/useUpload'
import { UploadFilled } from '@element-plus/icons-vue'

const emit = defineEmits(['change'])

const uploadRef = ref<UploadInstance>()

const { valiteFile, handleExceed, acceptType } = useUpload(uploadRef);

const handleChange = (file: UploadFile, fileList: UploadFiles) => {
    if (valiteFile(file, fileList) && file.raw) {
        emit('change', file.raw);
    }
}

</script>