<template>
  <el-container>
    <el-header>小工具</el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <router-link to="/volume"
              ><el-link :icon="Edit">体积计算</el-link></router-link
            >
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script setup></script>
