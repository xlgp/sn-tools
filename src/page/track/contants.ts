import { TrackStatusType } from "./data";

export const track_status: {
    [key: string]: TrackStatusType;
} = {
    //揽收
    PACKAGE: { code: 0, text: "揽收" },
    //运输中
    TRACKING: { code: 1, text: "运输中" },
    //派送中
    DELIVERY: { code: 2, text: "派送中" },
    //已签收
    SIGNED: { code: 3, text: "签收" },
};