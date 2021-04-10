/**
 * Includes
 */
const users = ['John', 'David', 'Mike', 'Sam', 'Carol', 'Bob'];
users.push('Fred');

console.log(users.includes('Sam'));     // true
console.log(users.includes('Samuel'));  // false