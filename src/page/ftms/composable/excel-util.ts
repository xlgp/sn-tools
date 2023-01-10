/**
 * 标题：
 * 牌照	城市	品牌	款型	年份	姓名	电话	保司	身份证号码	备注
 */

import { read, utils, WorkBook, WorkSheet, write, WritingOptions } from "xlsx";
import { KeyItemType, SheetItemType } from "../data";

function sheet2blob(
    sheetObject: {
        [key: string]: WorkSheet
    }): Blob {

    var workbook: WorkBook = {
        SheetNames: Object.keys(sheetObject),
        Sheets: {}
    };
    for (const sheetName in sheetObject) {
        if (Object.prototype.hasOwnProperty.call(sheetObject, sheetName)) {
            const workBook = sheetObject[sheetName];
            workbook.Sheets[sheetName] = workBook;
        }
    }

    var wopts: WritingOptions = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    var wbout = write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    }); // 字符串转ArrayBuffer
    function s2ab(s: string) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}

function openDownloadDialog(blob: Blob, saveName: string) {
    let url = "";
    if (typeof blob == 'object' && blob instanceof Blob) {
        url = URL.createObjectURL(blob); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
    aLink.remove();
}

export const exportToXlsx = (
    dataObject: {
        [key: string]: {
            [key: string]: any;
        }[];
    },
    fileName: string
) => {

    let sheetObject: {
        [key: string]: WorkSheet
    } = {};

    for (const key in dataObject) {
        if (Object.prototype.hasOwnProperty.call(dataObject, key)) {
            const list = dataObject[key];
            sheetObject[key] = utils.json_to_sheet(list)
        }
    }

    openDownloadDialog(sheet2blob(sheetObject), getSaveName(Object.keys(sheetObject), fileName));
}

function getSaveName(sheetNames: string[], fileName: string) {

    let lastIndex = fileName.lastIndexOf(".");

    let sheetName = sheetNames.length == 1 && sheetNames[0] + "-" || "";

    return fileName.substring(0, lastIndex) + "-" + sheetName + (+new Date) + fileName.substring(lastIndex);

}


export const importXlsx = (file: File) => {
    return new Promise((resolve, reject) => {

        let reader = new FileReader();
        reader.onload = (e) => {
            try {
                resolve(read(e.target?.result));
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsArrayBuffer(file);
    });
}

/**
 * 
 * @param workBook 
 * @param sheetIndex 
 * @param keyList 
 * @param startRowIndex :起始行，若第一行是标题，则从第二行开始
 * @returns 
 */
export const sheet2json = (workBook: WorkBook, sheetIndex: number, keyList: KeyItemType[], startRowIndex: number = 0, splitReg = "\t") => {
    let sheet = workBook.Sheets[workBook.SheetNames[sheetIndex]];
    let lineList = utils.sheet_to_txt(sheet).split("\n");

    //判断第一行是否是标题
    startRowIndex = keyList.find(item => lineList[0].includes(item.zhKey) || lineList[0].includes(item.key)) && 1 || 0;

    let resultList = [];
    for (let i = startRowIndex; i < lineList.length; i++) {
        const line = lineList[i];
        let list = line.split(splitReg);
        let item: SheetItemType = {};

        for (const keyItem of keyList) {
            item[keyItem.key] = list[keyItem.index].trim()
        }

        resultList.push(item);
    }

    return resultList;
}