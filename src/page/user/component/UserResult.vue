<template>
  <h2>用户信息</h2>
  <el-descriptions direction="vertical" :column="1" border>
    <el-descriptions-item label="Sql">
      <high-light-code :code="sql" language="sql" />
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { UserFormKeyType } from "../data";
import { useUserStore } from "../store/user";

const { form } = storeToRefs(useUserStore());

const sql = computed(() => {
  let keys: UserFormKeyType[] = Object.keys(form.value) as UserFormKeyType[];
  let values: string[] = [];
  let keyTexts: string[] = [];

  keys.forEach((key) => {
    values.push('"' + (form.value[key] || "") + '"');
    keyTexts.push("`" + key + "`");
  });
  return `insert into user(${keyTexts.join(", ")}) value(${values.join(", ")})`;
});
</script>
