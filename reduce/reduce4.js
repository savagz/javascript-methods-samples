/**
 * REDUCE
Step 1 : reduce
[
  { name: 'Write a tutorial', duration: 180 },
  { name: 'Some web development', duration: 120 },
  { name: 'Keep writing that tutorial', duration: 240 },
  { name: 'Some more web development', duration: 180 },
  { name: 'A whole lot of nothing', duration: 240 }
]

Step 2: map (task.duration / 60)
[ 3, 2, 4, 3, 4 ]

Step 3: filter (duration >= 3)
[ 3, 4, 3, 4 ]

Step 4: map (duration * 25)
[ 75, 100, 75, 100 ]

Step 5: reduce (Sum) 
[ 350 ]

Step 6: map (add $ and decimals)
[ '$350.00' ]

Step 7: reduce
$350.00
 */
var monday = [
    {
        'name': 'Write a tutorial',
        'duration': 180
    },
    {
        'name': 'Some web development',
        'duration': 120
    }
];

var tuesday = [
    {
        'name': 'Keep writing that tutorial',
        'duration': 240
    },
    {
        'name': 'Some more web development',
        'duration': 180
    },
    {
        'name': 'A whole lot of nothing',
        'duration': 240
    }
];

var tasks = [monday, tuesday];

var result = tasks.reduce(function (accumulator, current) {
    return accumulator.concat(current);
}).map(function (task) {
    return (task.duration / 60);
}).filter(function (duration) {
    return duration >= 3;
}).map(function (duration) {
    return duration * 25;
}).reduce(function (accumulator, current) {
    return [(+accumulator) + (+current)];
}).map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
}).reduce(function (formatted_dollar_amount) {
    return formatted_dollar_amount;
});

console.log(result);