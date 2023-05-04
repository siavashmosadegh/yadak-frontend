import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

class ConvertGregorianToPersian {

    parseToJDate(date,format) {
        let dateObject = new DateObject(date);

        dateObject
            .setCalendar(persian)
            .setLocale(persian_fa);

        return dateObject.format(format);
    }
}

export default new ConvertGregorianToPersian();