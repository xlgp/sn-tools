import { TrackStatusType } from "./data";

export enum TrackStatusEnum {
    PACKAGE = 0,
    //运输中
    TRACKING = 1,
    //派送中
    DELIVERY = 2,
    //已签收
    SIGNED = 3
}

export type TrackStatusKey = TrackStatusEnum.PACKAGE | TrackStatusEnum.TRACKING | TrackStatusEnum.DELIVERY | TrackStatusEnum.SIGNED;

export const track_status: {
    [key: number]: TrackStatusType;
} = {
    //揽收
    [TrackStatusEnum.PACKAGE]: { code: 0, text: "揽收" },
    //运输中
    [TrackStatusEnum.TRACKING]: { code: 1, text: "运输中" },
    //派送中
    [TrackStatusEnum.DELIVERY]: { code: 2, text: "派送中" },
    //已签收
    [TrackStatusEnum.SIGNED]: { code: 3, text: "签收" },
};

export const colunms = {
    status: "状态",
    update_time: "时间",
    info: "信息",
    station: "地点",
};