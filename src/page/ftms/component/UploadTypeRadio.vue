<template>
    <div>
        数据类型：
        <el-radio-group v-model="modelValue" @change="handleChange">
            <el-radio v-for="item in uploadTypeRadioKeyList" :label="item.id" size="large" border>{{
                item.text
            }}</el-radio>
        </el-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { useFtmsStore } from '../stores/ftms';

const { uploadTypeRadioKeyList } = useFtmsStore();
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleChange = (val: any) => {
    emit('update:modelValue', val);
}
</script>
