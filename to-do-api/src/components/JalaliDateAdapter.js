// JalaaliDateAdapter.js
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

dayjs.extend(jalaliday);
dayjs.calendar('jalali'); // Activate Jalali calendar

export class AdapterJalaali extends AdapterDayjs {
    constructor() {
        super();
    }

    getYear(date) {
        return date.calendar('jalali').year();
    }

    getMonth(date) {
        return date.calendar('jalali').month();
    }

    getDate(date) {
        return date.calendar('jalali').date();
    }

    setYear(date, year) {
        return date.calendar('jalali').year(year);
    }

    setMonth(date, month) {
        return date.calendar('jalali').month(month);
    }

    setDate(date, day) {
        return date.calendar('jalali').date(day);
    }

    format(date, formatKey) {
        return date.calendar('jalali').format(formatKey);
    }
}