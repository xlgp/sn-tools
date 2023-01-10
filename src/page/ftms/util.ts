export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

/**
 * 补零
 */
export function prefix0(num: number) {
    return num < 10 && "0" + num || num;
}

export function downloadFile(blob: Blob, saveName: string) {
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

/**
 * 线性扫描
 * @param weights 
 * @param weightSum 
 * @returns 
 */
export function linearScan(weights: number[], weightSum: number) {
    let rand = getRandomInt(0, weightSum);
    for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        rand -= weight;
        if (rand <= 0) {
            return i;
        }
    }
    return 0;
}