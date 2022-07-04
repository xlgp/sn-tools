<template>
  <h3>体积计算</h3>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-input
        v-model="textarea"
        :rows="30"
        type="textarea"
        placeholder="Please input"
      />
    </el-col>
    <el-col :span="12">
      <el-row :gutter="4">
        <el-col :span="8">
          <el-card>
            <template #header>
              <h4>结果</h4>
            </template>
            <div v-for="(value, index) in showComputedList" :key="index">{{ value }}</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <h4>结果</h4>
            </template>
            <div v-for="(value, index) in showList" :key="index">{{ value }}</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <h4>总计</h4>
            </template>
            <p>{{ totalCount }}</p>
          </el-card>
        </el-col>
      </el-row>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <el-button @click="handleCopy" size="large" type="primary">复制</el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from "vue";
import useClipboard from "vue-clipboard3";
import { ElMessage } from "element-plus";

const textarea = ref("");

const delimiter = " "; //分隔符

const { toClipboard } = useClipboard();

let textareaList = computed(() => {
  let value = textarea.value.trim();
  if (!value) {
    return [];
  }
  let list = value.split("\n");
  if (!list || list.length == 0) {
    return [];
  }
  return list.map((item) => {
    // 长 宽 高 数量
    let l = item.trim().split(delimiter);
    console.log(l);
    return {
      len: l[0],
      width: l[1],
      height: l[2],
      count: l[3],
    };
  });
});

let showList = computed(() => {
  let text = "";
  return textareaList.value.map((item) => {
    return item.len + "X" + item.width + "X" + item.height + ";" + item.count + ",";
  });
});

let showComputedList = computed(() => {
  return textareaList.value.map((item) => {
    return (
      item.len +
      "X" +
      item.width +
      "X" +
      item.height +
      "X" +
      item.count +
      "=" +
      item.len * item.width * item.height * item.count
    );
  });
});

let totalCount = computed(() => {
  let total = 0;
  textareaList.value.forEach((item) => {
    total += item.len * item.width * item.height * item.count;
  });
  return total;
});

const handleCopy = async () => {
  try {
    let text =
      showComputedList.value.join("\n") +
      "\t" +
      showList.value.join("\n") +
      "\t" +
      totalCount.value;
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
