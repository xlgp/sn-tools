<template>
  <div style="margin-bottom: 20px">
    <span class="title">数据类型</span>
    <el-radio-group v-model="modelValue" @change="handleChange">
      <el-radio-button v-for="item in uploadTypeRadioKeyList" :label="item.id" border>{{
        item.text
      }}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { useFtmsStore } from "../stores/ftms";

const { uploadTypeRadioKeyList } = useFtmsStore();

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const handleChange = (val: any) => {
  emit("update:modelValue", val);
};
</script>
<style scoped>
.title {
  height: 32px;
  display: inline-flex;
  line-height: 32px;
  vertical-align: bottom;
  font-size: var(--el-form-label-font-size);
  color: var(--el-text-color-regular);
  padding: 0 12px 0 0;
}
</style>
