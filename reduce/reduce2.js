/**
 * Reduce
    {
    CALL: [
        { type_value: 'answer', total: 1 },
        { type_value: 'busy', total: 1 }
    ],
    EMAIL: [
        { type_value: 'send', total: 5 },
        { type_value: 'draft', total: 2 }
    ]
    }
 */
let data = [
    {
        "type_name": "CALL",
        "type_value": "answer",
        "total": 1
    },
    {
        "type_name": "CALL",
        "type_value": "busy",
        "total": 1
    },
    {
        "type_name": "EMAIL",
        "type_value": "send",
        "total": 5
    },
    {
        "type_name": "EMAIL",
        "type_value": "draft",
        "total": 2
    }
];

const result = data.reduce(function (res, item) {
    let groupKey = (item['type_name']);

    let newitem = item;
    delete newitem['type_name'];

    (res[groupKey] ? res[groupKey] : (res[groupKey] = null || [])).push(newitem);
    return res;
}, {});

//console.log(result);

Object.keys(result).map(key => {
    console.log(key);
    result[key].map(res => {
        console.log(res);
    })
});
