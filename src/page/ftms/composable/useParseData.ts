import { keyList, KLUGER, RAV4, SeriesKeyList } from "../contants/constans";
import { KlugerList } from "../contants/kluger";
import { Rav4List } from "../contants/rav4";
import { SeriesKeyType, SeriesType, DataType } from "../data";
import { useFtmsStore } from "../stores/ftms";

function getSeriesList(series: SeriesKeyType): SeriesType[] {

    if (series.id == KLUGER) {
        return KlugerList;
    } else if (series.id == RAV4) {
        return Rav4List;
    }
    throw new Error(`车系代码错误:${series.id},${series.text}`);
}

interface CitysType {
    [key: string]: SeriesType[]
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

function setDealer(list: DataType[], citys: CitysType) {
    list.forEach(item => {
        let index = getRandomInt(0, citys[item.city].length);
        let series = citys[item.city][index];
        item.dealerId = series.dealerId;
        item.dealerName = series.name;
    });
}

/**
 * 补零
 */
export function prefix0(num: number) {
    return num < 10 && "0" + num || num;
}

/**
 * 权重值
 */
const hourWeight = {
    hour: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    weight: [15, 19, 14, 8, 10, 17, 16, 12, 10, 5, 3, 3, 2, 2],
};

/**
 * 权重总和
 */
const weightSum = (() => {
    return hourWeight.weight.reduce((a, v) => a + v);
})();

/**
 * 权重设计
 * 线性扫描
 */
function getHourIndex() {
    let rand = getRandomInt(0, weightSum);
    for (let i = 0; i < hourWeight.weight.length; i++) {
        const weight = hourWeight.weight[i];
        rand -= weight;
        if (rand <= 0) {
            return i;
        }
    }
    return 0;
}

function getDay(hour: number, date: Date) {
    if (hour >= 9 && hour < 18) {
        return date.getDate();
    }
    return date.getDate() + 1;
}

function getTime() {

    const { dateTime } = useFtmsStore();

    let hourIndex = getHourIndex();
    let hour = hourWeight.hour[hourIndex];

    let date = new Date(getRandomInt(dateTime[0].getTime(), dateTime[1].getTime()));
    while (date.getHours() != hour) {
        date = new Date(getRandomInt(dateTime[0].getTime(), dateTime[1].getTime()));
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let minute = prefix0(getRandomInt(0, 60));
    let second = prefix0(getRandomInt(0, 60));

    return year + "-" + prefix0(month) + "-" + prefix0(day) + " " + prefix0(hour) + ":" + minute + ":" + second;
}

function setOrderTime(list: DataType[]) {
    list.forEach(item => {
        item.orderAt = getTime();
    });
}

export function getSeries(name: string) {
    return SeriesKeyList.filter(item => name.includes(item.text))[0];
}

export default (dataList: [], series: SeriesKeyType) => {

    let seriesList = getSeriesList(series);

    let list = dataList.map((item: any) => {
        return {
            city: item[keyList.city],
            username: item[keyList.username],
            phone: item[keyList.phone],
            seriesId: series.id
        } as DataType;
    });

    let citylist = new Set<string>();
    list.forEach(item => citylist.add(item.city));

    let citys: CitysType = {};

    citylist.forEach(city => {
        citys[city] = seriesList.filter(item => item.city == city);
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
        data[keyList.orderAt] = item.orderAt; console.log(item.orderAt);
        return data;
    });
}