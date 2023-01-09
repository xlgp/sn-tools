/**
 * 标题：
 * 牌照	城市	品牌	款型	年份	姓名	电话	保司	身份证号码	备注
 */

import { read, utils, WorkBook, WorkSheet, write, WritingOptions } from "xlsx";
import { SeriesKeyType } from "../data";
import { prefix0 } from "../util";

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
    let date = new Date;
    let strDate = prefix0(date.getMonth() + 1) + "" + prefix0(date.getDate());

    let sheetObject: {
        [key: string]: WorkSheet
    } = {};

    for (const key in dataObject) {
        if (Object.prototype.hasOwnProperty.call(dataObject, key)) {
            const list = dataObject[key];
            sheetObject[key] = utils.json_to_sheet(list)
        }
    }

    openDownloadDialog(sheet2blob(sheetObject), strDate + "-" + fileName);
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

export const sheet2json = (workBook: WorkBook, sheetIndex: number) => {
    let sheet = workBook.Sheets[workBook.SheetNames[sheetIndex]];
    return utils.sheet_to_json(sheet) as [];
}