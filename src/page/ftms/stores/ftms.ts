import { fileDataType, SeriesKeyList } from "../contants/constans";
import { SeriesKeyType, SeriesType } from "../data";

export const useFtmsStore = defineStore("ftmsStore", () => {

    let toDay = new Date;
    const dateTime: [Date, Date] = reactive([
        new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate() - 1, 18),
        new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate(), 17, 59, 59)
    ]);

    const uploadTypeRadioKeyList = reactive(fileDataType);

    function getLocalKey(series: SeriesKeyType) {
        return series.label + series.id;
    }


    function getSeries(series: SeriesKeyType) {
        let text = localStorage.getItem(getLocalKey(series));
        return text && JSON.parse(text) || [];
    }

    /**
     * key:SeriesKeyList.label
     */
    const seriesList = reactive({
        [SeriesKeyList[0].label]: getSeries(SeriesKeyList[0]) as SeriesType[],
        [SeriesKeyList[1].label]: getSeries(SeriesKeyList[1]) as SeriesType[],
    });

    function saveSeries(list: SeriesType[], series: SeriesKeyType) {
        localStorage.setItem(getLocalKey(series), JSON.stringify(list));
        seriesList[series.label] = list;
    }

    function hasSeriesData(series: SeriesKeyType) {
        return seriesList[series.label].length > 0;
    }

    return { dateTime, uploadTypeRadioKeyList, seriesList, saveSeries, hasSeriesData };
});