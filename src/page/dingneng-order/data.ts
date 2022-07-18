export interface GoodsItemType {
    key: string,
    value: number,
    text: string
}

const goodsList: GoodsItemType[] = [
    {
        key: 'zhixiang',
        value: 0,
        text: '纸箱'
    },
    {
        key: 'muxiang',
        value: 0,
        text: '木箱'
    },
    {
        key: 'tiejian',
        value: 0,
        text: '铁件'
    },
    {
        key: 'qita',
        value: 0,
        text: '其他'
    }
];

export const getGoodsList = () => {
    return Object.assign([] as unknown as GoodsItemType, goodsList);
}

