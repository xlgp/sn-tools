<template>
  <el-row :gutter="20">
    <el-col :span="10">
      <result
        :total-count="totalCount"
        :show-computed-list="showComputedList"
        :show-list="showList"
        :region="region"
      >
        <el-input v-model="region" placeholder="请输入地区">
          <template #prepend>地区</template>
        </el-input>
      </result>
    </el-col>
    <el-col :span="4">
      <fieldset>
        <legend>分隔符：</legend>
        <el-radio-group v-model="delimiter">
          <el-radio
            v-for="radio in delimiterRadioList"
            :label="radio.value"
            size="small"
            border
            >{{ radio.label }}</el-radio
          >
        </el-radio-group>
      </fieldset>
      <el-input
        v-model="textarea"
        :rows="20"
        type="textarea"
        :placeholder="textareaPlaceholder"
        style="font-size: large"
      />
    </el-col>
    <el-col :span="10">
      <upload />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import result from "./result.vue";
import upload from "./upload.vue";

const textarea = ref("");

const textareaPlaceholder = ref(
  [
    "请在此输入输入",
    "一行一组",
    "以空格相格",
    "例如：",
    "123 32 23 3",
    "56 65 45 3",
    "234 42 34 6",
  ].join("\n")
);

const delimiterRadioList = {
  SPACE: { label: "空格", value: " " },
  X: { label: "X;", value: "X" },
};

const region = ref("");

const delimiter = ref(delimiterRadioList.SPACE.value); //分隔符

function splitValue(value: any, delimiter: string) {
  if (delimiter == delimiterRadioList.SPACE.value) {
    //空格
    return value.trim().split(delimiter);
  } else if (delimiter == delimiterRadioList.X.value) {
    let text = value.trim().split(delimiter);
    let t = text[2].split(";");
    return [text[0], text[1], t[0], t[1]];
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
  if (list[0].includes(delimiterRadioList.X.value)) {
    delimiter.value = delimiterRadioList.X.value;
  } else {
    delimiter.value = delimiterRadioList.SPACE.value;
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
  return textareaList.value.map((item) => {
    return item.len + "X" + item.width + "X" + item.height + ";" + item.count;
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
</script>
<style scope>
.result-wapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

fieldset {
  border-width: 1px;
  border-color: #fff;
  border-radius: 0px;
  margin-bottom: 1em;
}
legend {
  color: var(--el-text-color-secondary);
}
</style>
