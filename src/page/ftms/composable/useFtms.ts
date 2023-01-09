import { Ref } from "vue";
import { WorkBook } from "xlsx";
import { SHEET_SELECT_ALL } from "../contants/constans";
import { SeriesType, SheetObjectType } from "../data";
import { useFtmsStore } from "../stores/ftms";
import { exportToXlsx, sheet2json } from "./excel-util";
import useParseData, { getSeriesFromName } from "./useParseData";

export default () => {

    const store = useFtmsStore();
    const { uploadTypeRadioKeyList } = storeToRefs(store);

    const uploadType = ref(uploadTypeRadioKeyList.value.data.id);

    const workBook = ref<WorkBook>();

    const handleXlsxData = (params: {
        sheetObject: SheetObjectType,
        fileName: string,
        uploadType: Ref<number>
    }) => {
        const { sheetObject, fileName, uploadType } = params;

        if (uploadType.value == uploadTypeRadioKeyList.value.data.id) { //数据

            let dataObject: {
                [key: string]: {
                    [key: string]: any;
                }[]
            } = {};

            for (const sheetName in sheetObject) {
                if (Object.prototype.hasOwnProperty.call(sheetObject, sheetName)) {
                    const list: [] = sheetObject[sheetName];
                    let series = getSeriesFromName(sheetName, fileName);
                    if (!store.hasSeriesData(series)) {
                        throw new Error(`没有该车系的数据：${series.text} 请先上传${series.text}的数据`);
                    }
                    dataObject[sheetName] = useParseData(list, series);
                }
            }
            exportToXlsx(dataObject, fileName);

        } else if (uploadType.value == uploadTypeRadioKeyList.value.seriesData.id) {

            for (const sheetName in sheetObject) {
                if (Object.prototype.hasOwnProperty.call(sheetObject, sheetName)) {
                    const list: [] = sheetObject[sheetName];
                    let series = getSeriesFromName(sheetName, fileName);
                    store.saveSeries(list as SeriesType[], series);
                    ElMessage.success(`已添加${sheetName}${list.length}条数据`);
                }
            }
        } else {
            throw new Error("类型错误");
        }
    }

    const sheetDialogConfig = reactive({
        visible: false,
        sheetNames: [] as string[],
        sheetIndex: SHEET_SELECT_ALL.index,
        fileName: ""
    });

    watch(() => sheetDialogConfig.fileName, () => sheetDialogConfig.sheetIndex = SHEET_SELECT_ALL.index)

    const openSheetDialog = (fileName: string, sheetNames: string[]) => {
        sheetDialogConfig.sheetNames = sheetNames;
        sheetDialogConfig.visible = true;
        sheetDialogConfig.fileName = fileName;
    }

    const handleSheetSelect = (sheetIndex: number) => {
        if (!workBook.value) {
            return;
        }

        let sheetObject: SheetObjectType = {};

        if (sheetIndex == SHEET_SELECT_ALL.index) { //选择所有
            let sheetNames = workBook.value.SheetNames;
            for (let i = 0; i < sheetNames.length; i++) {
                sheetObject[sheetNames[i]] = sheet2json(workBook.value, i);
            }
        } else {
            sheetObject[workBook.value.SheetNames[sheetIndex]] = sheet2json(workBook.value, sheetIndex);
        }
        try {
            handleXlsxData({ sheetObject, fileName: sheetDialogConfig.fileName, uploadType });
        } catch (error: any) {
            console.error(error);
            ElMessage.error(error.message);
        } finally { workBook.value = undefined; }
    }

    return {
        workBook,
        sheetDialogConfig,
        openSheetDialog,
        uploadType,
        handleSheetSelect
    }
}