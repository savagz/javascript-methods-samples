/**
 * Some
 */
const names = ['John','David','Mike','Sam','Carol','Bob'];

/** Function : Name length = 3 */
const len3 = (element) => element.length === 3;

console.log(names.some(len3)); // True