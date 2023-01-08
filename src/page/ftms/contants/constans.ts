import { SeriesKeyType } from "../data";

export const KLUGER = 57;
export const RAV4 = 38;

export const SeriesKeyList: SeriesKeyType[] = [
    { id: KLUGER, text: "陆放", label: "kluger" },
    { id: RAV4, text: "荣放", label: "rav4" }
];

export const uploadTypeRadioKList = [
    { id: 0, text: "数据" },
    ...SeriesKeyList
];

export const keyList = {
    city: "城市",
    username: "姓名",
    phone: "电话",
    seriesId: "车系代码",
    dealerId: "经销商编码",
    dealerName: "经销商名称",
    orderAt: "时间",
};