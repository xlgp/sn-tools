<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-form-item label="时间范围">
      <el-date-picker
        v-model="dateTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useFtmsStore } from "../stores/ftms";

const { dateTime } = storeToRefs(useFtmsStore());
</script>
