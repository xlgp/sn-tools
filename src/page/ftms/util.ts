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