<template>
  <h2>
    轨迹生成器<el-button type="primary" @click="addItem" text>新增</el-button>
    <el-popconfirm title="确认删除所有？" @confirm="deleteAllItem">
      <template #reference>
        <el-button type="danger" text>删除</el-button>
      </template>
    </el-popconfirm>
  </h2>
  <el-form label-width="50px">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-form-item label="订单号" label-width="80px">
          <el-input v-model="dn_order_id" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col class="col" :span="8" v-for="(item, index) in dataList">
        <track-item
          v-model="dataList[index]"
          :index="index"
          @delete="deleteItem(index)"
          :key="index"
        />
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import useTrack from "./composable/useTrack";

const {
  dataList,
  dn_order_id,
  addItem,
  deleteAllItem,
  deleteItem,
  sortData,
} = useTrack();
</script>
<style scoped>
.col {
  margin-bottom: 10px;
}
</style>
