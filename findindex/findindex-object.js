/**
 * FindIndex
 */
const users = [
  { "user": "dan", "liked": "yes", "age": "22" },
  { "user": "sarah", "liked": "no", "age": "21" },
  { "user": "john", "liked": "yes", "age": "23" },
];

var index = users.findIndex(item => item.user === 'sarah');

console.log(index); // Index : 1