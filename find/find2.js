const users = [
    { "user": "dan", "liked": "yes", "age": "22" },
    { "user": "sarah", "liked": "no", "age": "21" },
    { "user": "john", "liked": "yes", "age": "23" },
];

var user = users.find(item => item.user === 'sarah');

console.log(user); // { user: 'sarah', liked: 'no', age: '21' }