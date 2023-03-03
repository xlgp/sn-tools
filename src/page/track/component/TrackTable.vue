<template>
  <el-table :data="dataList" stripe>
    <el-table-column :prop="colunms.status" :label="colunms.status" width="120">
      <template #default="scope">
        <el-select v-model="scope.row.status" placeholder="状态">
          <el-option
            v-for="item in status_list"
            :key="item.code"
            :label="item.text"
            :value="item.code"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column :prop="colunms.update_time" :label="colunms.update_time" width="250">
      <template #default="scope">
        <el-date-picker
          v-model="scope.row.update_time"
          type="datetime"
          placeholder="更新时间"
          value-format="x"
        />
      </template>
    </el-table-column>
    <el-table-column :prop="colunms.station" :label="colunms.station" width="150"
      ><template #default="scope"
        ><el-input v-model="scope.row.station" placeholder="地点" /> </template
    ></el-table-column>
    <el-table-column :prop="colunms.info" :label="colunms.info">
      <template #default="scope">
        <el-input v-model="scope.row.info" placeholder="更新信息" />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="80">
      <template #default="scope">
        <el-button link type="danger" size="small" @click="deleteItem(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { track_status, colunms } from "../contants";
import { useTrackStore } from "../stores/track";
import useTrack from "../composable/useTrack";

const { dataList } = useTrackStore();
const { deleteItem } = useTrack();
const status_list = Object.values(track_status);

const changeStatus = (value: string | number | boolean) => {
  throw new Error("此处需要实现");
};
</script>
