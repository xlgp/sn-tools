import { Ref } from "vue";
import { KLUGER, RAV4 } from "../contants/constans";
import { ImportXlsxType, SeriesType } from "../data";
import { useFtmsStore } from "../stores/ftms";
import { exportToXlsx } from "./excel-util";
import useParseData, { getSeries } from "./useParseData";

export default (params: {
    res: ImportXlsxType,
    fileName: string,
    uploadType: Ref<number>
}) => {
    const store = useFtmsStore();
    const { uploadTypeRadioKeyList } = storeToRefs(store);
    const { saveSeries } = store;

    const { res, fileName, uploadType } = params;
    const { list, sheetName } = res;
    let series = getSeries(sheetName, fileName);

    if (uploadType.value == uploadTypeRadioKeyList.value[0].id) { //数据

        exportToXlsx(useParseData(list, series), series);

    } else if (uploadType.value == KLUGER || uploadType.value == RAV4) {

        saveSeries(list as SeriesType[], uploadType.value);
        ElMessage.success(`已添加${list.length}条数据`);
    } else {
        throw new Error("类型错误");
    }
}