/**
 * Filter
 */
const names = ['John', 'David', 'Mike', 'Sam', 'Carol', 'Bob'];
names.push('Fred');

var newusers = names.filter(item => item !== 'Mike');

console.log(newusers);
// Result: [ 'John', 'David', 'Sam', 'Carol', 'Bob', 'Fred' ]