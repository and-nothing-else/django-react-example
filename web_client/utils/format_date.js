export default (date, format="L") => {
    var moment = require('moment');
    require('moment/locale/ru');
    return moment(date).format(format)
}
