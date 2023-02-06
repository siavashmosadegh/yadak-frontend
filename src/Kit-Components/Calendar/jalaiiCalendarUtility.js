export const monthsJalaali = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
];

export const daysJalaali = [
    'ج',
    'پ',
    'چ',
    'س',
    'د',
    'ی',
    'ش',
];

export const JalaiWeekDayConvertor = (isoDay) => {
    switch (isoDay) {
        case 0:
            return 1
        case 1:
            return 2
        case 2:
            return 3
        case 3:
            return 4
        case 4:
            return 5
        case 5:
            return 6
        case 6:
            return 0
        default:
            return 0
    }
}