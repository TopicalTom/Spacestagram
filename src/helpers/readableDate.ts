const generateMonth = (month: string) => {
    switch (month) {
        case '01':
            return 'JAN'
        case '02':
            return 'FEB'
        case '03':
            return 'MAR'
        case '04':
            return 'APR'
        case '05':
            return 'MAY'
        case '06':
            return 'JUN'
        case '07':
            return 'JUL'
        case '08':
            return 'AUG'
        case '09':
            return 'SEP'
        case '10':
            return 'OCT'
        case '11':
            return 'NOV'
        case '12':
            return 'DEC'
        default:
            return;
    }
};

export const readableDate = (date: string) => {
    const splitDate = date.split('-');
    const year = splitDate[0];
    const day = splitDate[2];
    const readableMonth = generateMonth(splitDate[1]);
    return `${readableMonth} ${day}, ${year}`;
}