<template>
  <el-dialog v-model="dialogVisible" title="选择Sheet">
    <p>{{ fileName }}</p>
    <radio-title text="Sheet" />
    <el-radio-group v-model="sheetIndex" @change="handleChange">
      <el-radio v-for="item in sheetNameList" :label="item.index" border>{{
        item.label
      }}</el-radio>
    </el-radio-group>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSelected"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { SHEET_SELECT_ALL } from "../contants/constans";
import RadioTitle from "./RadioTitle.vue";
const props = defineProps({
  sheetIndex: {
    type: Number,
    default: SHEET_SELECT_ALL.index,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  fileName: {
    type: String,
  },
  sheetNames: {
    type: Array,
    default: [],
  },
});
const emit = defineEmits(["update:sheetIndex", "update:visible", "select"]);

const sheetNameList = computed({
  get() {
    let list = [
      SHEET_SELECT_ALL,
      ...props.sheetNames.map((label, index) => {
        return { index, label };
      })
    ]
    return list;
  },
  set(value) {
    console.log(value);
  },
});

const dialogVisible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit("update:visible", value);
  },
});

const handleChange = (val: any) => {
  emit("update:sheetIndex", val);
};

const handleSelected = () => {
  dialogVisible.value = false;
  emit("select", props.sheetIndex);
};
</script>
