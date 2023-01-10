<template>
  <div style="margin-bottom: 20px">
    <radio-title text="数据类型" />
    <el-radio-group v-model="value">
      <el-radio-button v-for="item in uploadTypeRadioKeyList" :label="item.id" border>{{
        item.text
      }}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { useFtmsStore } from "../stores/ftms";
import RadioTitle from "./RadioTitle.vue";
const { uploadTypeRadioKeyList } = useFtmsStore();

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
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
