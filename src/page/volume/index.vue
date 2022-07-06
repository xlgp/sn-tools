<template>
  <el-row :gutter="20">
    <el-col :span="12">
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
      <el-input
        v-model="textarea"
        :rows="20"
        type="textarea"
        placeholder="Please input"
        style="font-size: large"
      />
    </el-col>
    <el-col :span="12">
      <p>
        <el-button size="large" type="primary" @click="handleShowResult"
          >计算结果</el-button
        >
      </p>
      <div style="position: relative; height: calc(100% - 60px)">
        <upload />
        <result
          class="result-wapper"
          v-show="resultShow"
          :total-count="totalCount"
          :show-computed-list="showComputedList"
          :show-list="showList"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from "vue";
import result from "./result.vue";
import upload from "./upload.vue";

const textarea = ref("");
const resultShow = ref(false);

const delimiterRadioList = [
  { label: "空格", value: " " },
  { label: "X;", value: "X" },
];

const delimiter = ref(delimiterRadioList[0].value); //分隔符

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

const handleShowResult = () => {
  resultShow.value = !resultShow.value;
};
</script>
<style scope>
.result-wapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
