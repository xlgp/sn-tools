<template>
  <p>
    分隔符：
    <el-radio-group v-model="delimiter">
      <el-radio
        v-for="radio in delimiterRadioList"
        :label="radio.value"
        size="large"
        border
        >{{ radio.label }}</el-radio
      >
    </el-radio-group>
  </p>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-input
        v-model="textarea"
        :rows="20"
        type="textarea"
        placeholder="Please input"
        style="font-size: large"
      />
    </el-col>
    <el-col :span="12">
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
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from "vue";
import useClipboard from "vue-clipboard3";
import { ElMessage } from "element-plus";

const textarea = ref("");

const delimiterRadioList = [
  { label: "空格", value: " " },
  { label: "X;", value: "X" },
];

const delimiter = ref(delimiterRadioList[0].value); //分隔符

const { toClipboard } = useClipboard();

function splitValue(value, delimiter) {
  if (delimiter == delimiterRadioList[0].value) {
    //空格
    return value.trim().split(delimiter);
  } else if (delimiter == delimiterRadioList[1].value) {
    let text = value.trim().split(delimiter);
    let t = text[2].split(";");
    return [text[0], text[1], t[0], t[1].substring(0, t[1].length - 1)];
  }
}

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
    let l = splitValue(item, delimiter.value);
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
