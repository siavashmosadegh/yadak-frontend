import moment from "moment";
import jmoment from "moment-jalaali";

class DateTimeController {
  getDate(format, offset = 0) {
    let now = Date.now() + offset;
    let toDayObj = {
      "YYYY-MM-DD": moment(now).format("YYYY-MM-DD"),
    };
    return toDayObj[format];
  }
  
  parseToJDate(date, format) {
    return jmoment(date).format(format);
  }
}
export default new DateTimeController();
