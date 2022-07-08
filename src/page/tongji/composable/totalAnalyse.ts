import {  ComputedRef } from "vue";
import { DataItemType } from "../data";

export default (dataList: ComputedRef<DataItemType[]>,
    totalAmount: ComputedRef<number>, chengJiaoData: ComputedRef<{
        list: DataItemType[];
        totalAmount: number;
    }>) => {//报价总量分析

    function totalAnalyse() {
        let keys = ['询价单数', '询价金额', '供应单数', '供应金额', '未供应单数', '未供应金额'];
        let result = [];
        if (dataList.value && dataList.value.length > 0) {
            result.push({ key: keys[0], num: dataList.value.length, rate: 1});

            result.push({ key: keys[1], num: totalAmount.value, rate: 1 });

            result.push({ key: keys[2], num: chengJiaoData.value.list.length, rate: chengJiaoData.value.list.length / dataList.value.length });

            result.push({ key: keys[3], num: chengJiaoData.value.totalAmount, rate: chengJiaoData.value.totalAmount / totalAmount.value });

            let wei = dataList.value.length - chengJiaoData.value.list.length;
            result.push({ key: keys[4], num: wei, rate: wei / dataList.value.length });

            let weiJine = totalAmount.value - chengJiaoData.value.totalAmount;
            result.push({ key: keys[5], num: weiJine, rate: weiJine / totalAmount.value });
        }
        return result;
    }
    return computed(() => totalAnalyse());
}