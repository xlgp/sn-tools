<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>轨迹（{{ index }}）</span>
        <el-button class="button" type="danger" text @click="$emit('delete')"
          >删除</el-button
        >
      </div>
    </template>
    <el-form-item label="状态">
      <el-radio-group v-model="data.status" @change="changeStatus">
        <el-radio-button v-for="item in status_list" :label="item.code"
          >{{ item.text }}({{ item.code }})</el-radio-button
        >
      </el-radio-group>
    </el-form-item>
    <el-row>
      <el-col :span="14">
        <el-form-item label="时间">
          <el-date-picker
            v-model="data.update_time"
            type="datetime"
            placeholder="更新时间"
            value-format="x"
          />
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="地点">
          <el-input v-model="data.station" placeholder="地点" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="信息">
      <el-input v-model="data.info" placeholder="更新信息" />
    </el-form-item>
  </el-card>
</template>
<script setup lang="ts">
import { track_status } from "../contants";
import { TrackItemType } from "../data";

defineEmits(["delete"]);

const status_list = Object.values(track_status);

const { index, modelValue } = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: Object,
    default: {} as TrackItemType,
  },
});

const data = computed<TrackItemType>(() => modelValue as TrackItemType);

const changeStatus = (value: string | number | boolean) => {
  if (!data.value.info) {
    data.value.info = status_list.find((item) => item.code == value)?.text || "";
  }
};
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
