<template>
  <h2>用户信息</h2>
  <el-descriptions title="用户信息" direction="vertical" :column="1" border>
    <el-descriptions-item label="Sql">
      <high-light-code :code="sql" language="sql"/>
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { useUserStore } from "../store/user";

const { form } = storeToRefs(useUserStore());

const sql = computed(() => {
  let keys = ["openid", "app_auth_code", "username", "nickname", "password"];
  let values = [];
  let keyTexts = [];
  keys.forEach((key) => {
    values.push('"' + form.value[key] + '"');
    keyTexts.push("`" + key + "`");
  });
  return `insert into user(${keyTexts.join(", ")}) value(${values.join(", ")})`;
});
</script>
