/**
 * Filter 
 */
const users = [
  { "user": "dan", "liked": "yes", "age": "22" },
  { "user": "sarah", "liked": "no", "age": "21" },
  { "user": "john", "liked": "yes", "age": "23" },
];

var newusers = users.filter(item => item.liked === 'yes'); // Filter liked=yes

console.log(newusers);
/**
 * Result :
  [
   { user: 'dan', liked: 'yes', age: '22' },
   { user: 'john', liked: 'yes', age: '23' }
  ]
*/