import { SeriesKeyType } from "../data";

export const KLUGER = 57;
export const RAV4 = 38;

export const SeriesKeyList: SeriesKeyType[] = [
    { id: KLUGER, text: "陆放", label: "kluger" },
    { id: RAV4, text: "荣放", label: "rav4" }
];

export const SHEET_SELECT_ALL = {
    index:-1,
    label:"全部"
};

export const keyList = {
    city: "城市",
    username: "姓名",
    phone: "电话",
    seriesId: "车系代码",
    dealerId: "经销商编码",
    dealerName: "经销商名称",
    orderAt: "时间",
};


/**
 * 权重值
 */
export const hourWeight = {
    hour: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    weight: [10, 9, 9, 8, 10, 8, 10, 11, 9, 9, 7, 4, 2, 1],
};

/**
 * 权重总和
 */
export const weightSum = (() => {
    return hourWeight.weight.reduce((a, v) => a + v);
})();