import { Ref } from "vue";
import { WorkBook } from "xlsx";
import { KLUGER, RAV4 } from "../contants/constans";
import { SeriesType } from "../data";
import { useFtmsStore } from "../stores/ftms";
import { exportToXlsx, sheet2json } from "./excel-util";
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
        const { list, sheetName, fileName, uploadType } = params;

        if (uploadType.value == uploadTypeRadioKeyList.value[0].id) { //数据
            let series = getSeries(sheetName, fileName);
            if (!store.hasSeriesData(series)) {
                throw new Error(`没有该车系的数据：${series.text} 请先上传${series.text}的数据`);
            }
            exportToXlsx(useParseData(list, series), series);

        } else if (uploadType.value == KLUGER || uploadType.value == RAV4) {

            store.saveSeries(list as SeriesType[], uploadType.value);
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

    watch(() => sheetDialogConfig.fileName, () => sheetDialogConfig.sheetIndex = 0)

    const openSheetDialog = (fileName: string, sheetNames: string[]) => {
        sheetDialogConfig.sheetNames = sheetNames;
        sheetDialogConfig.visible = true;
        sheetDialogConfig.fileName = fileName;
    }

    const handleSheetSelect = (sheetIndex: number) => {
        if (!workBook.value) {
            return;
        }
        let list = sheet2json(workBook.value, sheetIndex);
        try {
            handleXlsxData({ list, sheetName: workBook.value.SheetNames[sheetIndex], fileName: sheetDialogConfig.fileName, uploadType });
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