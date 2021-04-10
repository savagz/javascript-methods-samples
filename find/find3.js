const resultData = [
    { 'group': 'Group_1', 'name': 'Campaign_1', 'userid': '6061' },
    { 'group': 'Group_1', 'name': 'Campaign_2', 'userid': '6061' },
    { 'group': 'Group_1', 'name': 'Campaign_2', 'userid': '6062' },
    { 'group': 'Group_2', 'name': 'Campaign_1', 'userid': '6063' },
    { 'group': 'Group_2', 'name': 'Campaign_2', 'userid': '6063' }
];

// Groups
const finalData = [...new Set(resultData.map(item => item.group))].map(_group => {
    return {
        group: _group,
        campaigns: [...new Set(resultData.filter(item => item.group === _group).map(el => el.name))].map(_name => {
            return {
                name: _name,
                userids: [...new Set(resultData.filter(item => item.group === _group && item.name === _name).map(el => el.userid))].map(_userid => {
                    return {
                        number: _userid
                    };
                })
            };
        })
    };
});
//console.log(JSON.stringify(finalData));

const datafilter = {
    group: 'Group_1',
    name: 'Campaign_1'
}

finalData.filter(item => datafilter.group !== '' && item.group === datafilter.group)
    .map(item => item.campaigns).flat().filter(item2 => datafilter.name !== '' && item2.name === datafilter.name).sort().map(option => (
    console.log('Queue: '+option.name)
));
