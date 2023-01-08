import { Ref } from "vue";
import { WorkBook } from "xlsx";
import { KLUGER, RAV4 } from "../contants/constans";
import { SeriesType } from "../data";
import { useFtmsStore } from "../stores/ftms";
import { exportToXlsx, getWorkSheet } from "./excel-util";
import useParseData, { getSeries } from "./useParseData";

export default () => {

    const store = useFtmsStore();
    const { uploadTypeRadioKeyList } = storeToRefs(store);

    const uploadType = ref(uploadTypeRadioKeyList.value[0].id);

    const workBook = ref<WorkBook>();

    const handleXlsxData = (params: {
        list: [],
        sheetName: string,
        fileName: string,
        uploadType: Ref<number>
    }) => {
        const { saveSeries } = store;

        const { list, sheetName, fileName, uploadType } = params;
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

    const sheetDialogConfig = reactive({
        visible: false,
        sheetNames: [] as string[],
        sheetIndex: 0,
        fileName: ""
    });

    const openSheetDialog = (fileName: string, sheetNames: string[]) => {
        sheetDialogConfig.sheetNames = sheetNames;
        sheetDialogConfig.visible = true;
        sheetDialogConfig.fileName = fileName;
    }

    const handleSheetSelect = (sheetIndex: number) => {
        if (!workBook.value) {
            return;
        }
        let list = getWorkSheet(workBook.value, sheetIndex);
        handleXlsxData({ list, sheetName: workBook.value.SheetNames[sheetIndex], fileName: sheetDialogConfig.fileName, uploadType });
        workBook.value = undefined;
    }

    return {
        workBook,
        sheetDialogConfig,
        openSheetDialog,
        uploadType,
        handleSheetSelect
    }
}