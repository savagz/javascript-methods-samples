/**
 * Reduce
    [
    audi: [
        { make: 'audi', model: 'r8', year: '2012' },
        { make: 'audi', model: 'rs5', year: '2013' }
    ],
    ford: [
        { make: 'ford', model: 'mustang', year: '2012' },
        { make: 'ford', model: 'fusion', year: '2015' }
    ],
    kia: [ { make: 'kia', model: 'optima', year: '2012' } ]
    ]
 * 
 */
const cars = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
];

const result = cars.reduce(function (r, a) {
    r[a.make] = r[a.make] || [];
    r[a.make].push(a);
    return r;
}, []);

console.log(result);