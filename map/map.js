/**
 * Map
 * Add new value in Objects
 */
const users = [
    { "user": "dan", "liked": "yes", "age": "22" },
    { "user": "sarah", "liked": "no", "age": "21" },
    { "user": "john", "liked": "yes", "age": "23" },
];

var newusers = users.map(item => {
    if (item.liked === 'no') {
        item.action = 'Delete';
    } else {
        item.action = 'Update';
    }
    return item;
});

console.log(newusers);