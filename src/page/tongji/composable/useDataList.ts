
import pinpaiList from "@/data/pinpai";
import { Ref } from "vue";
import { DataItemType } from "../data";

export default (content: Ref<string>) => {

    let noPinPaiKey = "无品牌类别";

    let getLeiBie = (name: string) => { //获取品牌的类别
        return pinpaiList.filter(v => {
            return v.name == name || v.parent == name;
        });
    }

    let getDataList = () => { //总数据列表
        let list: string[] = [];
        if (content.value != undefined && content.value.length > 0) {
            list = content.value.split('\n');
        }

        if (list.length > 0) {
            list = list.filter(v => v != undefined && v.length > 0);
        }

        if (list.length == 0) return [];

        let resultList = list.map(c => {
            let v = c.split('\t');
            let result: DataItemType = {} as DataItemType;

            result['date'] = v[0] && v[0].trim() || '无日期';
            result['dingsunyuan'] = v[1] && v[1].trim() || '无定损员';
            result['xiaoshouyuan'] = v[2] && v[2].trim() || '无销售员';
            result['chepai'] = v[3] && v[3].trim() || '车牌';
            result['pinpai'] = v[4] && v[4].trim() || '品牌';
            result['isChengJiao'] = v[5] && v[5].trim() == '是' && true || false;
            result['jine'] = v[6] && parseInt(v[6].trim()) || 0;
            result['pinpai_leibie'] = noPinPaiKey;
            try {
                if (result['pinpai'] != '品牌') {
                    result['pinpai_leibie'] = getLeiBie(result['pinpai'])[0].leibie;
                }
            } catch (error) {
                console.error(result, error);
            }
            return result;
        });
        return resultList;
    }

    const dataList = computed(() => { //数据列表
        return getDataList();
    });

    const totalAmount = computed(() => { //总金额
        let total = 0;
        if (dataList.value && dataList.value.length > 0) {
            dataList.value.forEach(v => {
                if (!isNaN(v.jine)) {
                    total += v.jine;
                }
            });
        }
        return total;
    });

    //无品牌类型，若此值存在，则表示品牌的数据不全，应补全数据
    const noPinPaiDataList = computed(()=>{
        if (dataList.value && dataList.value.length > 0) {
            return dataList.value.filter((value)=>{
                return value.pinpai_leibie == noPinPaiKey;
            });
        }
        return [];
    });

    const chengJiaoData = computed(() => { //成交数据
        let totalAmount = 0;
        let list: DataItemType[] = [];
        if (dataList.value && dataList.value.length > 0) {
            list = dataList.value.filter(v => {
                if (v.isChengJiao) {
                    totalAmount += v.jine;
                    return true;
                }
                return false;
            });
        }
        return {
            list,
            totalAmount,
        };
    });

    return {
        dataList,
        totalAmount,
        chengJiaoData,
        noPinPaiDataList,
    };
}