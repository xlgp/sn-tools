<template>
  <el-container>
    <el-header>小工具</el-header>
    <el-container>
      <el-aside width="200px">
        <router-link to="/" class="link">首页</router-link>
        <router-link to="/volume" class="link">体积计算</router-link>
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
