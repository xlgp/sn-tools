<template>
  <div>
    <el-row :gutter="4">
      <el-col :span="12">
        <el-card @click="handleCopy(showComputedList)">
          <template #header>
            <span>结果</span>
          </template>
          <div v-for="(value, index) in showComputedList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card @click="handleCopy(showList)">
          <template #header>
            <span>结果</span>
          </template>
          <div v-for="(value, index) in showList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-card @click="handleCopy(totalCount)">
      <template #header>
        <span>总计</span>
      </template>
      <div>{{ totalCount }}</div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import useClipboard from "vue-clipboard3";

const { showComputedList, totalCount, showList } = defineProps({
  showComputedList: Array,
  totalCount: [Number, String],
  showList: Array,
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
