<template>
  <div class="upload-wapper">
    <div class="el-image">
      <img
        :src="imageUrl"
        @wheel="handleWheel"
        @mousemove="handleMousemove"
        @mousedown="handleMousedown"
        @mouseup="handleMouseup"
        :style="{
          transform:
            'scale(' +
            scale +
            ') translate(' +
            translate.x +
            'px, ' +
            translate.y +
            'px)',
          'object-fit': 'contain',
        }"
        class="el-image__inner"
      />
    </div>
    <p class="tips" @click="handleInitImage">
      图片还原<el-icon><Refresh /></el-icon>
    </p>
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
import { Plus, Refresh } from "@element-plus/icons-vue";
import type {
  UploadFile,
  UploadInstance,
  UploadProps,
  UploadRawFile,
} from "element-plus";

import useMove from "./composable/useMove";

const upload = ref<UploadInstance>();
const imageUrl = ref("");
const limit = ref(1);
const scale = ref(1);
const imgRef = ref(null);
const { handleMousedown, handleMousemove, handleMouseup, translate, init } = useMove();

onMounted(() => {
  console.log(imgRef);
});

const handleChange = (uploadFile: UploadFile) => {
  console.log(uploadFile);
  if (uploadFile && uploadFile.hasOwnProperty("url")) {
    imageUrl.value = uploadFile.url || "";
  }
};

const handleInitImage = () => {
  scale.value = 1;
  init();
};

const genFileId = () => {
  return +new Date();
};

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

const handleWheel = (e: WheelEvent) => {
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
</script>
<style scope>
.upload-wapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 1px solid #c4c6cb;
  border-radius: 4px;
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
}
.el-upload-list {
  display: none;
}
.tips {
  position: absolute;
  bottom: 0;
  right: 20px;
  color: var(--el-color-info);
  cursor: pointer;
}
</style>
