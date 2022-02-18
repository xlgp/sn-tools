import { computed, ComputedRef } from "vue";
import { DataItemType } from "../data";

export interface PinPaiAnalyseType {
    total: number,
    jine: number,
    totalRate: number,
    jineRate: number,
    chengJiaoTotal: number, //成交量
    chengJiaoJine: number,
    pinpai_leibie: string,
}

export interface ResultType {
    [key: string]: PinPaiAnalyseType
}

function createAnalyseObj(v: DataItemType) {
    return {
        pinpai_leibie: v.pinpai_leibie,
        total: 1,
        jine: v.jine,
        totalRate: 0,
        jineRate: 0,
        chengJiaoTotal: v.isChengJiao && 1 || 0, //成交量
        chengJiaoJine: v.isChengJiao && v.jine || 0,
    } as PinPaiAnalyseType;
}

function computeAnalyseObj(a: PinPaiAnalyseType, v: DataItemType) {
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

    function getResult() {
        let result: ResultType = {} as ResultType;
        if (dataList.value && dataList.value.length > 0) {
            dataList.value.sort((f, s) => f.pinpai_leibie.localeCompare(s.pinpai_leibie));

            dataList.value.forEach(e => {
                if (!result[e.pinpai_leibie]) {
                    result[e.pinpai_leibie] = createAnalyseObj(e);
                } else {
                    computeAnalyseObj(result[e.pinpai_leibie], e);
                }
            });

            computeRate(result, dataList.value.length, totalAmount.value);
        }
        return result;
    }
    return computed(() => getResult());
}