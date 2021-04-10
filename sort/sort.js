/**
 * Sort
 */
const users = [
    { "user": "dan", "liked": "yes", "age": "25" },
    { "user": "sarah", "liked": "no", "age": "21" },
    { "user": "john", "liked": "yes", "age": "23" },
    { "user": "jonas", "liked": "yes", "age": "19" },
];

/** Sort Function (by age) */
const sortData = arr => {
    arr.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
};

sortData(users);
console.log(users);