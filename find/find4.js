const resultData = [
    { 'qname': 'Campaign_1', 'typename1': '', 'typename2': '', 'typename3': '' },
    { 'qname': 'Campaign_1', 'typename1': 'CALL', 'typename2': '', 'typename3': '' },
    { 'qname': 'Campaign_1', 'typename1': 'CALL', 'typename2': 'CLIENT', 'typename3': '' },
    { 'qname': 'Campaign_1', 'typename1': 'CALL', 'typename2': 'CLIENT', 'typename3': 'STATE' },
    { 'qname': 'Campaign_1', 'typename1': 'CHAT', 'typename2': 'WEB', 'typename3': '' },
    { 'qname': 'Campaign_1', 'typename1': 'CHAT', 'typename2': 'WEB', 'typename3': '' },
    { 'qname': 'Campaign_1', 'typename1': 'CHAT', 'typename2': '', 'typename3': '' },
    { 'qname': 'Campaign_2', 'typename1': '', 'typename2': '', 'typename3': '' },
    { 'qname': 'Campaign_2', 'typename1': 'EMAIL', 'typename2': '', 'typename3': '' },
    { 'qname': 'Campaign_2', 'typename1': 'EMAIL', 'typename2': 'CLIENT', 'typename3': '' },
    { 'qname': 'Campaign_3', 'typename1': '', 'typename2': '', 'typename3': '' }
];

// Groups
const finalData = [...new Set(resultData.map(item => item.qname))].map(_queue => {
    return {
        queue: _queue,
        typing1: [...new Set(resultData.filter(item => item.qname === _queue && item.typename1 !== '').map(el => el.typename1))].map(_typename => {
            return {
                type: _typename,
            };
        }),
        typing2: [...new Set(resultData.filter(item => item.qname === _queue && item.typename2 !== '').map(el => el.typename2))].map(_typename => {
            return {
                type: _typename,
            };
        }),
        typing3: [...new Set(resultData.filter(item => item.qname === _queue && item.typename3 !== '').map(el => el.typename3))].map(_typename => {
            return {
                type: _typename,
            };
        })
    };
});

//console.log(JSON.stringify(finalData));

const datafilter = {
    queue: 'Campaign_1'
}

finalData.filter(item => datafilter.queue !== '' && item.queue === datafilter.queue)
    .map(item => item.typing1).flat().sort().map(option => (
        console.log('Type: ' + option.type)
    ));