<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card>
        <template #header>体积计算</template>
        <router-link to="/volume">体积计算</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <template #header>品牌统计</template>
        <router-link to="/tongji">品牌统计</router-link>
      </el-card>
    </el-col>
  </el-row>
</template>
