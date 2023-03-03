import { TrackItemType } from "../data";

export const useTrackStore = defineStore('trackStore', ()=>{
    const dn_order_id = ref<string>("");
    const dataList = reactive<TrackItemType[]>([] as TrackItemType[]);

    return{dn_order_id, dataList};
});