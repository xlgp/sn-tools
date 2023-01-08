<template>
    数据类型：
    <el-radio-group v-model="modelValue" @change="handleChange">
        <el-radio v-for="item in uploadTypeRadioKList" :label="item.id" size="large" border>{{ item.text }}</el-radio>
    </el-radio-group>
</template>

<script lang="ts" setup>
import { uploadTypeRadioKList } from '../contants/constans';
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleChange = (val: any) => {
    emit('update:modelValue', val);
}
</script>
