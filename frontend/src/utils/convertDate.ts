interface ConvertDateReturnType {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}

const convertDate = (date: string): ConvertDateReturnType => {
    // 2021-05-22T00:26:12.843439
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const hour = date.slice(11, 13);
    const minute = date.slice(14, 16);
    const second = date.slice(17, 19);

    return { year, month, day, hour, minute, second };
};

export default convertDate;
