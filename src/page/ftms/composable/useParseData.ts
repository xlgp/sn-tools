import moment from 'moment';
import { DataType, KLUGER, RAV4, SeriesKeyType, SeriesType } from "../contants/constans";
import { KlugerList } from "../contants/kluger";
import { Rav4List } from "../contants/rav4";

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

function getTime() {
    let str = "2023-01-"
    let date = new Date;
    let day = getRandomInt(date.getDate(), date.getDate() + 2);
    let min = day == date.getDate() && 18 || 9;
    let max = day == date.getDate() && 22 || 17;
    let hour = prefix0(getRandomInt(min, max));
    let minute = prefix0(getRandomInt(0, 60));
    let second = prefix0(getRandomInt(0, 60));
    return str + prefix0(day) + " " + hour + ":" + minute + ":" + second;
}

function setOrderTime(list: DataType[]) {
    list.forEach(item => {
        item.orderAt = getTime();
    });
}

export default (series: SeriesKeyType, list: DataType[]) => {
    let seriesList = getSeriesList(series);

    let citylist = new Set<string>();
    list.forEach(item => citylist.add(item.city));

    let citys: CitysType = {};

    citylist.forEach(city => {
        citys[city] = seriesList.filter(item => item.city == city);
    });

    setDealer(list, citys);
    setOrderTime(list);
}