export const KLUGER = 57;
export const RAV4 = 38;

export interface SeriesKeyType {
    id: number,
    text: string;
}

export interface SeriesType {
    dealerId: string,
    name: string,
    city: string
}

export const SeriesList: SeriesKeyType[] = [
    { id: KLUGER, text: "陆放" },
    { id: RAV4, text: "荣放" }
];

export interface DataType {
    city: string,
    username: string,
    phone: string,
    seriesId: number,
    dealerId: string,
    dealerName: string,
    orderAt: string
}

export const keyList = {
    city: "城市",
    username: "姓名",
    phone: "电话",
    seriesId: "车系代码",
    dealerId: "经销商编码",
    dealerName: "经销商名称",
    orderAt: "时间",
};