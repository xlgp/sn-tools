<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <span style="color: var(--el-color-info)">点击可自动复制</span>
          <el-link type="primary" :href="qqDocLink" target="_blank">打开腾讯文档</el-link>
        </div>
      </template>
      <el-row :gutter="10">
        <el-col :span="10"><slot></slot> </el-col>
        <el-col :span="14" @click="handleCopy(totalCount)">
          总计：{{ totalCount }}
        </el-col>
      </el-row>
    </el-card>
    <el-row>
      <el-col :span="16">
        <el-card @click="handleCopy(showComputedList)">
          <template #header>
            <span>计算后结果</span>
          </template>
          <div v-for="(value, index) in showComputedList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card @click="handleCopy(showList)">
          <template #header>
            <span>结果</span>
          </template>
          <div v-for="(value, index) in showList" :key="index">{{ value }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import useClipboard from "vue-clipboard3";

const { showComputedList, totalCount, showList, region } = defineProps({
  showComputedList: Array,
  totalCount: [Number, String],
  showList: Array,
  region: String,
});

const { toClipboard } = useClipboard();

const qqDocLink = ref("https://docs.qq.com/sheet/DS0FkVVhwd29KdHNk");

const handleCopy = async (value: any) => {
  try {
    if (value == undefined) return;
    let text = (Array.isArray(value) && value.join("\n")) || value.toString();
    await toClipboard(text);
    ElMessage({
      message: "复制成功",
      type: "success",
    });
  } catch (e: any) {
    console.error(e);
    ElMessage.error(e.message || "真奇怪，不知道哪里错了。");
  }
};
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
