const Unit = require("../lib/Unit");

const MILLISECONDS = 1;
const SECOND = 1 * 10^3;
const MINUTE = 6 * 10^4;
const HOUR = 36 * 10^5;
const DAY = 864 * 10^5;
const WEEK = 6048 * 10^5;
const MONTH = 2.62974383 * 10^9;
const YEAR = 3.1556926 * 10^10;

const milliseconds = new Unit(MILLISECONDS);
const second = new Unit(SECOND);
const minute = new Unit(MINUTE);
const hour = new Unit(HOUR);
const day = new Unit(DAY);
const week = new Unit(WEEK);
const month = new Unit(MONTH);
const year = new Unit(YEAR);
const ms = milliseconds;
const sec = second;
const s = sec;
const min = minute;
const m = min;
const hr = hour;
const h = hr;
const d = day;
const w = week;
const mon = month;
const y = year;

module.exports = {
  constants: {
    MILLISECONDS,
    SECOND,
    MINUTE,
    HOUR,
    DAY,
    WEEK,
    MONTH,
    YEAR
  },
  milliseconds,
  ms,
  second,
  sec,
  s,
  minute,
  min,
  m,
  hour,
  hr,
  h,
  day,
  d,
  week,
  w,
  month,
  mon,
  year,
  y
};
