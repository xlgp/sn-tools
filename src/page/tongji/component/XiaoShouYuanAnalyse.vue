<template>
  <el-card class="box-card" id="xsycard">
    <template #header>
      <span>销售员分析</span>
    </template>
    <el-table
      :data="tableData"
      id="xsytable"
      data-clipboard-target="#xsycard"
      style="width: 100%"
      size="small"
      show-summary
    >
      <el-table-column type="index" label="序号" />
      <el-table-column prop="xiaoshouyuan" label="销售员" />
      <el-table-column prop="total" label="总量" />
      <el-table-column prop="chengJiaoTotal" label="成交数量" />
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { DataItemType } from "../data";
import ClipboardJS from "clipboard";
import { ComputedRef } from "vue";

interface ItemType {
  xiaoshouyuan: string;
  total: number;
  chengJiaoTotal: number;
}

export interface ResultType {
  [key: string]: ItemType;
}
export default defineComponent({
  name: "DingSunYuanAnalyse",
  setup() {
    const dataList = inject("dataList") as ComputedRef<DataItemType[]>;

    const tableData: ComputedRef<ItemType[]> = computed(() => {
      let result: ResultType = {} as ResultType;
      if (dataList.value && dataList.value.length > 0) {
        dataList.value.sort((f: DataItemType, s: DataItemType) =>
          f.xiaoshouyuan.localeCompare(s.xiaoshouyuan)
        );

        dataList.value.forEach((e: DataItemType) => {
          if (!result[e.xiaoshouyuan]) {
            result[e.xiaoshouyuan] = {
              xiaoshouyuan: e.xiaoshouyuan,
              total: 1,
              chengJiaoTotal: (e.isChengJiao && 1) || 0,
            };
          } else {
            result[e.xiaoshouyuan].total += 1;
            result[e.xiaoshouyuan].chengJiaoTotal += (e.isChengJiao && 1) || 0;
          }
        });
        return Object.values(result);
      }
      return [] as ItemType[];
    });

    onMounted(() => {
      new ClipboardJS("#xsytable");
    });

    return {
      tableData,
    };
  },
});
</script>
