
export interface DataType {
    city: string,
    username: string,
    phone: string,
    seriesId: number,
    dealerId: string,
    dealerName: string,
    orderAt: string
}

export interface SeriesKeyType {
    id: number,
    text: string;
}

export interface SeriesType {
    dealerId: string,
    name: string,
    city: string
}