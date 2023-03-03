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

    const createJsonItem = () => {

    }

    return {
        addItem, deleteAllItem, deleteItem, createJsonItem
    };
}