<template>
  <div class="upload-wapper">
    <el-image
      :src="imageUrl"
      fit="contain"
      @click="handleImageClick"
      @wheel="handleWheel"
      :style="{
        transform: 'scale(' + scale + ')',
      }"
    />
    <el-upload
      action="#"
      drag
      ref="upload"
      :auto-upload="false"
      :limit="limit"
      list-type="picture"
      :on-change="handleChange"
      :on-exceed="handleExceed"
    >
      <el-icon class="el-icon--upload"><Plus /></el-icon>
      <div class="el-upload__text">拖拽或上传文件</div>
    </el-upload>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import { genFileId } from "element-plus";
import type {
  UploadFile,
  UploadInstance,
  UploadProps,
  UploadRawFile,
} from "element-plus";

const upload = ref<UploadInstance>();
const imageUrl = ref("");
const limit = ref(1);
const scale = ref(1);

const imageClick = (e, f) => {
  e.stopPropagation();
  console.log(e, f);
};

const handleChange = (uploadFile: UploadFile) => {
  console.log(uploadFile);
  if (uploadFile && uploadFile.hasOwnProperty("url")) {
    imageUrl.value = uploadFile.url;
  }
};

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

const handleWheel = (e) => {
  let step = 0.2;
  if (e.deltaY < 0) {
    //向下滚动
    if (scale.value < 2.0) {
      scale.value += step;
    } else {
      scale.value = 2.0;
    }
  } else if (e.deltaY > 0) {
    if (scale.value > 0.4) {
      scale.value -= step;
    } else {
      scale.value = 0.4;
    }
  }
  return false; //阻止冒泡与默认事件
};

const handleImageClick = (e) => {
  console.log(e);
};
</script>
<style scope>
.upload-wapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.el-upload {
  display: flex;
  opacity: 0.3;
}
.el-image {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  bottom: 0;
  right: 0;
  /* z-index: -1; */
}
.el-upload-list {
  display: none;
}
</style>
