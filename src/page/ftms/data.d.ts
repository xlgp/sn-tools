
export interface DataType {
    city: string,
    username: string,
    phone: string,
    seriesId: number,
    dealerId: string,
    dealerName: string,
    orderAt: string
}

export interface SheetObjectType {
    [key: string]: SheetItemType[]
}

export interface SheetItemType {
    [key: string]: string
}

interface CitysType {
    [key: string]: SeriesType[]
}

export interface SeriesKeyType {
    id: number,
    text: string;
    label: string,
}

export interface ImportXlsxType {
    list: [],
    sheetName: string
}

export interface SeriesType {
    dealerId: string,
    name: string,
    city: string
}

export interface KeyItemType {
    index: number;
    key: string,
    zhKey: string
}