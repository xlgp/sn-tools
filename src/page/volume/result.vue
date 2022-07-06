<template>
  <div>
    <el-row :gutter="4">
      <el-col :span="12">
        <el-card @click="handleCopy(showComputedList)">
          <template #header>
            <h4>结果</h4>
          </template>
          <div v-for="(value, index) in showComputedList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card @click="handleCopy(showList)">
          <template #header>
            <h4>结果</h4>
          </template>
          <div v-for="(value, index) in showList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-card @click="handleCopy(totalCount)">
      <template #header>
        <h4>总计</h4>
      </template>
      <div>{{ totalCount }}</div>
    </el-card>
  </div>
</template>

<script setup>
import useClipboard from "vue-clipboard3";
import { ElMessage } from "element-plus";

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
    ElMessage.error(e.message);
  }
};
</script>
