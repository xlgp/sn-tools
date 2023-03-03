<template>
  <h2>轨迹生成器</h2>
  <el-form label-width="50px">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-form-item label="订单号" label-width="80px">
          <el-input v-model="dn_order_id" />
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-button type="primary" @click="addItem" text>新增</el-button>
        <el-popconfirm title="确认删除所有？" @confirm="deleteAllItem">
          <template #reference>
            <el-button type="danger" text>删除</el-button>
          </template>
        </el-popconfirm>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="14">
        <track-table />
      </el-col>
      <el-col :span="10">
        <high-light-code />
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import useTrack from "./composable/useTrack";
import { useTrackStore } from "./stores/track";

const { dn_order_id } = storeToRefs(useTrackStore());

const { addItem, deleteAllItem } = useTrack();
</script>
