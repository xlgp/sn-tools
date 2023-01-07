import { UploadFile, UploadFiles, ElMessage, UploadProps, UploadRawFile } from "element-plus";
import { Ref } from "vue";

const acceptType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export default (uploadRef: Ref) => {

    //选择文件时验证 
    const valiteFile = (file: UploadFile, fileList: UploadFiles) => {
        let fileTemp = file.raw;
        if (fileTemp) {
            if (fileTemp.type == acceptType) {
                return true;
            } else {
                ElMessage({
                    type: 'warning',
                    message: '附件格式错误，请删除后重新上传！'
                })
            }
        } else {
            ElMessage({
                type: 'warning',
                message: '请上传附件！'
            })
        }
        return false;
    }
    //超出最大上传文件数量时的处理方法
    const handleExceed: UploadProps['onExceed'] = (files) => {
        uploadRef.value!.clearFiles()
        const file = files[0] as UploadRawFile
        file.uid = Date.now();
        uploadRef.value!.handleStart(file)
    }

    return {
        valiteFile,
        handleExceed,
        acceptType
    };
}