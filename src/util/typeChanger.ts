export const numberToString = (targetNumber: number | undefined): string => {
    if(targetNumber === undefined){
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth()+1).length < 2 ? "0" + String(now.getMonth()+1) : String(now.getMonth()+1);
        const day = String(now.getDate()+1).length < 2 ? "0" + String(now.getDate()+1) : String(now.getDate()+1);
        return year + "-" + month + "-" + day;
    }

    const targetNumberString = String(targetNumber);

    const year = targetNumberString.substring(0,4);
    const month = targetNumberString.substring(4,6);
    const day = targetNumberString.substring(6,8);

    return year+"-"+month+"-"+day;
}

export const stringToNumber = (targerStringDate: string): number => {
    const splitString = targerStringDate.split('-')
    return Number(splitString[0]+splitString[1]+splitString[2]);
}