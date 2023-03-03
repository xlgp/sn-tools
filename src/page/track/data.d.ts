export interface TrackItemType {
    status: number,
    update_time: number | undefined,
    info: string,
    station: string,
}

export interface TrackStatusType {
    code: number,
    text: string
}