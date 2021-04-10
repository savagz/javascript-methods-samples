/**
 * Every
 * Check all items < 40
 */
const data = [1, 30, 39, 29, 10, 13];

const isBelowThreshold = (currentValue) => currentValue < 40;

console.log(data.every(isBelowThreshold)); // True