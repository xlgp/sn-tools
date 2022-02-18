import { computed, ComputedRef } from "vue";
import { DataItemType } from "../data";

export interface DingSunYuanAnalyseType {
    total: number,
    jine: number,
    totalRate: number,
    jineRate: number,
    chengJiaoTotal: number, //成交量
    chengJiaoJine: number,
    dingsunyuan:string,
}

export interface ResultType {
    [key: string]: DingSunYuanAnalyseType
}

function createAnalyseObj(v: DataItemType) {
    return {
        total: 1,
        jine: v.jine,
        totalRate: 0,
        jineRate: 0,
        chengJiaoTotal: v.isChengJiao && 1 || 0, //成交量
        chengJiaoJine: v.isChengJiao && v.jine || 0,
        dingsunyuan:v.dingsunyuan,
    } as DingSunYuanAnalyseType;
}

function computeAnalyseObj(a: DingSunYuanAnalyseType, v: DataItemType) {
    a.total += 1;
    a.jine += v.jine;
    a.chengJiaoTotal += v.isChengJiao && 1 || 0;
    a.chengJiaoJine += v.isChengJiao && v.jine || 0;
};

function computeRate(result: ResultType, size: number, totalAmount: number) {
    let keys = Object.keys(result);
    keys.forEach(key => {
        result[key].totalRate = result[key].total / size;
        result[key].jineRate = result[key].jine / totalAmount;
    });
};

export default (dataList: ComputedRef<DataItemType[]>, totalAmount: ComputedRef<number>): ComputedRef<ResultType> => {
    let dingSunYuanAnalyse = () => { //定损员分析
        let result: ResultType = {};
        if (dataList.value && dataList.value.length > 0) {
            dataList.value.sort((f, s) => f.dingsunyuan.localeCompare(s.dingsunyuan));

            dataList.value.forEach(e => {
                if (!result[e.dingsunyuan]) {
                    result[e.dingsunyuan] = createAnalyseObj(e);
                } else {
                    computeAnalyseObj(result[e.dingsunyuan], e);
                }
            });
            computeRate(result, dataList.value.length, totalAmount.value);
        }
        return result;
    }
    return computed(() => dingSunYuanAnalyse());
}