<template>
  <el-container>
    <el-header>小工具</el-header>
    <el-container>
      <el-aside width="200px">
        <aside-router />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup></script>
<style scope>
.el-header {
  text-align: center;
  font-size: 28px;
  background-color: #000b26;
  color: white;
  line-height: 58px;
}

.el-aside {
  background-color: #000b26;
}

.link {
  padding: 10px;
  color: #ffffff;
  display: flex;
}
.router-link-exact-active {
  background-color: #0053a9;
}
</style>
