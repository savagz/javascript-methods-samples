/**
 * Calculate Next 5 minutes fraction
 * 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
 */
let now = new Date();
let nowMinutes = now.getMinutes();
let secondsToNext5Min = 300 - (((nowMinutes - (Math.floor(nowMinutes / 5) * 5)) * 60) + now.getSeconds());

console.log(`Seconds to Next 5 minutes: ${secondsToNext5Min} segs`);
