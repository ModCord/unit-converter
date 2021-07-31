# Unit Converter
An utility package for ModCord used to convert different metric units to their respectiv multiples and submultiples.

# Usage
```js
const { TimeUnits } = require("@modcord/unit-converter");
const { y, mon, w, d, h, m, s, ms } = TimeUnits;

function getDurationString(amountOfMs) {
  const [years, months, weeks, days, hours, minutes, seconds] = ms.to(y, mon, w, d, h, m, s)(amountOfMs);
  return `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}

getDurationString(40753197500);
// 1 years, 3 months, 2 weeks, 1 days, 3 hours, 4 minutes and 0 seconds
```