<template>
  <el-form
    ref="elForm"
    :model="formData"
    :rules="rules"
    size="medium"
    label-width="60px"
  >
    <el-form-item label="标题" prop="title">
      <el-input
        v-model="formData.title"
        placeholder="请输入标题"
        clearable
        :style="{ width: '100%' }"
      ></el-input>
    </el-form-item>
    <el-form-item label="副标题" prop="subTitle">
      <el-input
        v-model="formData.subTitle"
        placeholder="请输入副标题"
        clearable
        :style="{ width: '100%' }"
      ></el-input>
    </el-form-item>
    <form-item-table />
    <el-col :span="24">
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-col>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import FormItemTable from "./component/FormItemTable.vue";
import useRules from "./composable/rules";
import { fieldTypeOptions } from "./constants/fieldType";

export default defineComponent({
  components: { FormItemTable },
  setup() {
    const rules = useRules();
    const elForm = ref();

    const formData = ref({
      title: "",
      subTitle: undefined,
    });
    const submitForm = () => {
      elForm.value.validate((valid: any) => {
        if (!valid) return;
        // TODO 提交表单
      });
    };
    const resetForm = () => {
      elForm.value.resetFields();
    };
    return {
      formData,
      rules,
      fieldTypeOptions,
      submitForm,
      resetForm,
      elForm,
    };
  },
});
</script>


