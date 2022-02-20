<template>
  <el-form ref="elForm" :model="modelValue" :rules="rules" label-width="60px">
    <el-row :gutter="15">
      <el-col :span="6">
        <el-form-item label="类型" prop="fieldType">
          <el-select
            v-model="modelValue.type"
            placeholder="请选择类型"
            clearable
            :style="{ width: '100%' }"
          >
            <el-option
              v-for="(item, index) in fieldTypeOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="名称" prop="fieldName">
          <el-input
            v-model="modelValue.label"
            placeholder="请输入名称"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Key" prop="fieldId">
          <el-input
            v-model="modelValue.key"
            placeholder="请输入Key"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="值" prop="fieldValue">
          <el-input
            v-model="modelValue.value"
            placeholder="以“,”为分隔符"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { fieldTypeOptions } from "../constants/fieldType";
import useRules from "../composable/rules";
import { FormItemType } from "../constants/formItem";

export default defineComponent({
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  setup(props) {
    const modelValue = props.modelValue as FormItemType;
    const rules = useRules();
    return {
      rules,
      fieldTypeOptions,
      modelValue,
    };
  },
});
</script>
