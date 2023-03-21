<template>
  <h2>用户生成器</h2>
  <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="SecretKey" prop="secretKey">
      <el-input v-model="form.secretKey" />
    </el-form-item>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="用户昵称" prop="nickname">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="密码" prop="passwordText">
      <el-input v-model="form.passwordText" />
    </el-form-item>
    <el-form-item label="ID" prop="openid">
      <el-input v-model="form.openid" disabled />
    </el-form-item>
    <el-form-item label="Code" prop="app_auth_code">
      <el-input v-model="form.app_auth_code" disabled />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { FormInstance } from "element-plus";
import { reactive } from "vue";
import useUtils from "../composable/useUtils";
import useRules from "../composable/useRules";
import { UserFormType } from "../data";
import { useUserStore } from "../store/user";

const store = useUserStore();
const { form } = storeToRefs(store);
const { init } = store;

const { passwordUtil, createUser } = useUtils;

const rules = useRules();
const formRef = ref();

watch([() => form.value.passwordText, () => form.value.secretKey], (newValue) => {
  if (form.value.passwordText && form.value.secretKey) {
    form.value.password = passwordUtil(form.value.passwordText, form.value.secretKey);
  } else {
    form.value.password = "";
  }
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid: any) => {
    if (!valid) return;
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  init();
};
</script>
