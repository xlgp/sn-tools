import { randomUUID } from "crypto";
import { Ref } from "vue";
import { TrackItemType } from "../data";

export default () => {

    const dn_order_id = ref<string>("");
    const dataList = reactive<TrackItemType[]>([] as TrackItemType[]);

    const addItem = () => {
        dataList.push({
            update_time: undefined,
            info: "",
            status: -1,
            station: "",
        } as TrackItemType);
    };

    const deleteAllItem = () => {
        dataList.splice(0);
    };

    const deleteItem = (index: number) => {
        dataList.splice(index, 1);
    };

    const sortData = () => {
        dataList.sort((a, b) => {
            if (a.status != b.status) {
                return a.status - b.status;
            }
            if (!a.update_time && !b.update_time) {
                return 0;
            }
            if (a.update_time && b.update_time) {
                return a.update_time - b.update_time;
            }
            if (a.update_time) {
                return -1;
            }
            return 1;
        });
    }

    return {
        dataList, dn_order_id, addItem, deleteAllItem, deleteItem, sortData
    };
}