export const useFtmsStore = defineStore("ftmsStore", () => {

    let toDay = new Date;
    const dateTime: [Date, Date] = reactive([
        new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate(), 18),
        new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate() + 1, 17, 59, 59)
    ]);

    return { dateTime };
});