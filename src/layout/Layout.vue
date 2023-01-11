<template>
  <el-container>
    <el-header>小工具<icon-gitee /></el-header>
    <el-container class="container">
      <el-aside width="200px">
        <aside-router />
        <version />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup></script>
<style scoped>
.el-header {
  text-align: center;
  font-size: 28px;
  background-color: #000b26;
  color: white;
  line-height: 58px;
}

.el-aside {
  background-color: #000b26;
  position: relative;
}

.container {
  position: absolute;
  height: 100%;
  padding-top: 60px;
  width: 100%;
}
</style>
