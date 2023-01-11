import { hourWeight, keyList, SeriesKeyList, weightSum } from "../contants/constans";
import { SeriesKeyType, DataType, CitysType, SheetItemType } from "../data";
import { useFtmsStore } from "../stores/ftms";
import { getRandomInt, linearScan, prefix0 } from "../util";

function setDealer(list: DataType[], citys: CitysType) {
    list.forEach(item => {
        let index = getRandomInt(0, citys[item.city].length);
        let series = citys[item.city][index];
        item.dealerId = series.dealerId;
        item.dealerName = series.name;
    });
}

function getTime() {

    const { dateTime } = useFtmsStore();

    let hourIndex = linearScan(hourWeight.weight, weightSum);
    let hour = hourWeight.hour[hourIndex];

    let date = new Date(getRandomInt(dateTime[0].getTime(), dateTime[1].getTime()));
    while (date.getHours() != hour) {
        date = new Date(getRandomInt(dateTime[0].getTime(), dateTime[1].getTime()));
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let minute = prefix0(date.getMinutes());
    let second = prefix0(date.getSeconds());

    return year + "-" + prefix0(month) + "-" + prefix0(day) + " " + prefix0(hour) + ":" + minute + ":" + second;
}

function setOrderTime(list: DataType[]) {
    list.forEach(item => {
        item.orderAt = getTime();
    });
}

/**
 * 获取陆放或荣放， 先用sheetName
 * @param sheetName 
 * @param name 
 * @returns 
 */
export function getSeriesFromName(sheetName: string, name: string) {
    let list = SeriesKeyList.filter(item => sheetName.includes(item.text));
    if (list.length > 0) {
        return list[0];
    }
    list = SeriesKeyList.filter(item => name.includes(item.text));
    if (list.length > 0) {
        return list[0];
    }
    throw new Error("没有从文件名或sheet name 中找到车系名称");
}

export default (dataList: SheetItemType[], series: SeriesKeyType) => {

    const { seriesList } = storeToRefs(useFtmsStore());

    let tmpSeriesList = seriesList.value[series.label];

    let list = dataList.map((item: SheetItemType) => {
        return {
            ...item,
            seriesId: series.id
        } as DataType;
    });

    let citylist = new Set<string>();
    list.forEach(item => citylist.add(item.city));

    let citys: CitysType = {};

    citylist.forEach(city => {
        citys[city] = tmpSeriesList.filter(item => item.city == city);
        if(citys[city].length == 0){
            throw new Error(`没有该字段的车系数据：${city}`);
        }
    });

    setDealer(list, citys);
    setOrderTime(list);

    return list.map(item => {
        let data: { [key: string]: any } = {};
        data[keyList.city] = item.city;
        data[keyList.username] = item.username;
        data[keyList.phone] = item.phone;
        data[keyList.dealerId] = item.dealerId;
        data[keyList.dealerName] = item.dealerName;
        data[keyList.seriesId] = item.seriesId;
        data[keyList.orderAt] = item.orderAt;
        return data;
    });
}