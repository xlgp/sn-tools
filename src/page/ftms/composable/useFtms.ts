import { Ref } from "vue";
import { WorkBook } from "xlsx";
import { FILE_DATA, keyItemList, SeriesKeyItemList, SHEET_SELECT_ALL } from "../contants/constans";
import { SeriesType, SheetItemType, SheetObjectType } from "../data";
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

        if (uploadType.value == FILE_DATA.DATA) { //数据

            let dataObject: {
                [key: string]: {
                    [key: string]: any;
                }[]
            } = {};

            for (const sheetName in sheetObject) {
                if (Object.prototype.hasOwnProperty.call(sheetObject, sheetName)) {
                    const list: SheetItemType[] = sheetObject[sheetName];
                    let series = getSeriesFromName(sheetName, fileName);
                    if (!store.hasSeriesData(series)) {
                        throw new Error(`没有该车系的数据：${series.text} 请先上传${series.text}的数据`);
                    }
                    dataObject[sheetName] = useParseData(list, series);
                }
            }
            exportToXlsx(dataObject, fileName);

        } else if (uploadType.value == FILE_DATA.SERIES) {

            for (const sheetName in sheetObject) {
                if (Object.prototype.hasOwnProperty.call(sheetObject, sheetName)) {
                    const list: SheetItemType[] = sheetObject[sheetName];
                    let series = getSeriesFromName(sheetName, fileName);
                    store.saveSeries(list as unknown as SeriesType[], series);
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

    /**
     * 数据转化时，keylist
     */
    function getKeyItem(uploadType: number) {
        if (uploadType == FILE_DATA.DATA) {
            return keyItemList;
        } else if (uploadType == FILE_DATA.SERIES) {
            return SeriesKeyItemList;
        }
        throw new Error(`没有此类型key:${uploadType}`);
    }

    function handleEmptyLine(sheetName: string, emptyCount: number) {
        if (emptyCount) {
            ElMessage.warning(`sheet:${sheetName} 已忽略${emptyCount}行空数据`);
        }
    }

    const handleSheetSelect = (sheetIndex: number) => {
        if (!workBook.value) {
            return;
        }

        let sheetObject: SheetObjectType = {} as SheetObjectType;

        if (sheetIndex == SHEET_SELECT_ALL.index) { //选择所有
            let sheetNames = workBook.value.SheetNames;
            let keyList = getKeyItem(uploadType.value);
            for (let i = 0; i < sheetNames.length; i++) {
                let result = sheet2json(workBook.value, i, keyList);
                sheetObject[sheetNames[i]] = result.list;
                handleEmptyLine(sheetNames[i], result.emptyCount);
            }
        } else {
            let result = sheet2json(workBook.value, sheetIndex, getKeyItem(uploadType.value));
            sheetObject[workBook.value.SheetNames[sheetIndex]] = result.list;
            handleEmptyLine(workBook.value.SheetNames[sheetIndex], result.emptyCount);
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