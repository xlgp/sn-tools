<template>
  <el-card class="box-card" id="dsycard">
    <template #header>
      <span>定损员分析</span>
    </template>
    <el-table :data="tableData" id="dsytable"  data-clipboard-target="#dsycard"  style="width: 100%" size="small" show-summary>
      <el-table-column type="index" label="序号" />
      <el-table-column prop="dingsunyuan" label="类型" />
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
import { computed, ComputedRef, defineComponent, inject, onMounted } from "vue";
import ClipboardJS from 'clipboard';
import useDingSunYuanAnalyse, {
  DingSunYuanAnalyseType,
} from "../composable/dingSunYuanAnalyse";

export default defineComponent({
  name: "DingSunYuanAnalyse",
  setup() {
    const dataList = inject("dataList") as ComputedRef;
    const totalAmount = inject("totalAmount") as ComputedRef;

    const analyseResult = useDingSunYuanAnalyse(dataList, totalAmount);
    const tableData: ComputedRef<DingSunYuanAnalyseType[]> = computed(() => {
      return Object.values(analyseResult.value);
    });
    onMounted(()=>{
      new ClipboardJS('#dsytable');
    });
    return {
      tableData,
    };
  },
});
</script>
