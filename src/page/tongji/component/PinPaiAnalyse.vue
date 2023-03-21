<template>
  <el-card class="box-card" id="pinpaiCard">
    <template #header>
      <span>品牌构成分析</span>
    </template>
    <el-table
      :data="tableData"
      id="pinpaiTable"
      data-clipboard-target="#pinpaiCard"
      style="width: 100%"
      size="small"
      show-summary
    >
      <el-table-column type="index" label="序号" />
      <el-table-column prop="pinpai_leibie" label="类型" />
      <el-table-column prop="total" label="数量（份）" />
      <el-table-column prop="jine" label="金额" />
      <el-table-column prop="totalRate" label="数量占比" />
      <el-table-column prop="jineRate" label="金额占比" />
      <el-table-column prop="chengJiaoTotal" label="成交数量" />
      <el-table-column prop="chengJiaoJine" label="成交金额" />
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { ComputedRef } from "vue";
import usePinPaiAnalyse, { PinPaiAnalyseType } from "../composable/usePinPaiAnalyse";

export default defineComponent({
  name: "PinPaiAnalyse",
  setup() {
    const dataList = inject("dataList") as ComputedRef;
    const totalAmount = inject("totalAmount") as ComputedRef;

    const pinPaiAnalyseResult = usePinPaiAnalyse(dataList, totalAmount);

    const tableData: ComputedRef<PinPaiAnalyseType[]> = computed(() => {
      return Object.values(pinPaiAnalyseResult.value);
    });
    return {
      tableData,
    };
  },
});
</script>
