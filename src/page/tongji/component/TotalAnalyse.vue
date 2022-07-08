<template>
  <el-card class="box-card" id="totalCard">
    <template #header>
      <span>报价总量分析</span>
    </template>
    <el-table
      :data="totalAnalyse"
      id="totalTable"
      data-clipboard-target="#totalCard"
      style="width: 100%"
      size="small"
    >
      <el-table-column type="index" label="序号" />
      <el-table-column prop="key" label="类型" />
      <el-table-column prop="num" label="数量" />
      <el-table-column prop="rate" label="占比" />
    </el-table>
  </el-card>
</template>

<script lang="ts">
import useTotalAnalyse from "../composable/totalAnalyse";
import ClipboardJS from "clipboard";
import { ComputedRef } from "vue";

export default defineComponent({
  name: "TotalAnalyse",
  setup() {
    const dataList = inject("dataList") as ComputedRef;
    const totalAmount = inject("totalAmount") as ComputedRef;
    const chengJiaoData = inject("chengJiaoData") as ComputedRef;

    const totalAnalyse = useTotalAnalyse(dataList, totalAmount, chengJiaoData);

    onMounted(() => {
      new ClipboardJS("#totalTable");
    });

    return {
      totalAnalyse,
    };
  },
});
</script>
