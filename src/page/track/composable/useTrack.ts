import { TrackItemType } from "../data";
import { useTrackStore } from "../stores/track";

export default () => {

    const store = useTrackStore();

    const addItem = () => {
        store.dataList.push({} as TrackItemType);
    };

    const deleteAllItem = () => {
        store.dataList.splice(0);
    };

    const deleteItem = (index: number) => {
        store.dataList.splice(index, 1);
    };

    const jsonCode = computed(() => {
        return JSON.stringify({
            list: store.dataList,
            dn_order_id: store.dn_order_id
        }, null, 2);
    });

    return {
        addItem, deleteAllItem, deleteItem, jsonCode
    };
}