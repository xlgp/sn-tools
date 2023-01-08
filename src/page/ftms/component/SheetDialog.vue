<template>
    <el-button text @click="dialogFormVisible = true">
        打开
    </el-button>
    <el-dialog v-model="dialogFormVisible" title="Shipping address">
        <el-radio-group v-model="radio1">
            <el-radio label="1" size="large" border>Option A</el-radio>
            <el-radio label="2" size="large" border>Option B</el-radio>
        </el-radio-group>
    </el-dialog>
</template>
<script setup lang="ts">
const dialogFormVisible = ref(false);
const radio1 = ref(1);
</script>