const Unit = require("../lib/Unit");

const MILLISECOND = 1 * Math.pow(10, 0);
const SECOND = 1 * Math.pow(10, 3);
const MINUTE = 6 * Math.pow(10, 4);
const HOUR = 36 * Math.pow(10, 5);
const DAY = 864 * Math.pow(10, 5);
const WEEK = 6048 * Math.pow(10, 5);
const MONTH = 2.62974383 * Math.pow(10, 9);
const YEAR = 3.1556926 * Math.pow(10, 10);

const millisecond = new Unit(MILLISECOND);
const second = new Unit(SECOND);
const minute = new Unit(MINUTE);
const hour = new Unit(HOUR);
const day = new Unit(DAY);
const week = new Unit(WEEK);
const month = new Unit(MONTH);
const year = new Unit(YEAR);
const ms = millisecond;
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
    MILLISECOND,
    SECOND,
    MINUTE,
    HOUR,
    DAY,
    WEEK,
    MONTH,
    YEAR
  },
  millisecond,
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
