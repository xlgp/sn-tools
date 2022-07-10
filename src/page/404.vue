<template>
  <el-result icon="error" title="404" sub-title="not found">
    <template #extra>
      <router-link to="/"><el-button type="primary">回首页</el-button></router-link>
    </template>
  </el-result>
</template>
