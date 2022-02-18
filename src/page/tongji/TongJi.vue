<template>
  <el-row>
    <table style="width: 100%">
      <tr>
        <th v-for="(value, key) in headTableItem" :key="key">{{ value }}</th>
      </tr>
    </table>
    <el-input
      v-model="content"
      :rows="22"
      type="textarea"
      placeholder="请复制数据至此"
    />
  </el-row>
  <el-row>
    <no-pin-pai-list></no-pin-pai-list>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="12">
      <total-analyse></total-analyse>
      <ding-sun-yuan-analyse></ding-sun-yuan-analyse>
    </el-col>
    <el-col :span="12">
      <xiao-shou-yuan-analyse></xiao-shou-yuan-analyse>
      <pin-pai-analyse></pin-pai-analyse>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import useHeadTable from "./composable/useHeadTable";
import useDataList from "./composable/useDataList";
import TotalAnalyse from "./component/TotalAnalyse.vue";
import PinPaiAnalyse from "./component/PinPaiAnalyse.vue";
import DingSunYuanAnalyse from "./component/DingSunYuanAnalyse.vue";
import XiaoShouYuanAnalyse from "./component/XiaoShouYuanAnalyse.vue";
import NoPinPaiList from "./component/NoPinPaiList.vue";

export default defineComponent({
  name: "TongJi",
  components: {
    TotalAnalyse,
    PinPaiAnalyse,
    DingSunYuanAnalyse,
    XiaoShouYuanAnalyse,
    NoPinPaiList,
  },
  setup() {
    const headTableItem = useHeadTable();
    const content = ref<string>("");
    const { dataList, totalAmount, chengJiaoData, noPinPaiDataList } =
      useDataList(content);

    provide("dataList", dataList);
    provide("totalAmount", totalAmount);
    provide("chengJiaoData", chengJiaoData);
    provide('noPinPaiList', noPinPaiDataList);

    return {
      headTableItem,
      content,
      dataList,
      totalAmount,
      chengJiaoData,
    };
  },
});
</script>
