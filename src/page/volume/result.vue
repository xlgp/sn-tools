<template>
  <div>
    <el-card>
      <template #header>
        <span style="color: var(--el-color-info)">点击可自动复制</span>
      </template>
      <el-row :gutter="10">
        <el-col :span="10"><slot></slot> </el-col>
        <el-col :span="14" @click="handleCopy(totalCount)">
          总计：{{ totalCount }}
        </el-col>
      </el-row>
    </el-card>
    <el-card @click="handleCopy(showComputedList)">
      <template #header>
        <span>计算后结果</span>
      </template>
      <div v-for="(value, index) in showComputedList" :key="index">{{ value }}</div>
    </el-card>
    <el-card @click="handleCopy(showList)">
      <template #header>
        <span>结果</span>
      </template>
      <div v-for="(value, index) in showList" :key="index">{{ value }}</div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import useClipboard from "vue-clipboard3";

const { showComputedList, totalCount, showList, region } = defineProps({
  showComputedList: Array,
  totalCount: [Number, String],
  showList: Array,
  region: String,
});

const { toClipboard } = useClipboard();

const handleCopy = async (value) => {
  try {
    let text = (Array.isArray(value) && value.join("\n")) || value.toString();
    await toClipboard(text);
    ElMessage({
      message: "复制成功",
      type: "success",
    });
  } catch (e) {
    console.error(e);
    ElMessage.error(e.message || "真奇怪，不知道哪里错了。");
  }
};
</script>
