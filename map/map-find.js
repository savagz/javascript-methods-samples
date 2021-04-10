let panels = [
    {'name':'Jhon', 'number':'1001', 'interaction':{'answer':1, 'hangup':1}},
    {'name':'Carl', 'number':'2002', 'interaction':{'answer':2, 'hangup':1}},
    {'name':'Elon', 'number':'3003', 'interaction':{'answer':3, 'hangup':1}},
  ];

const news = [
    {'name':'Jhon', 'code':'1001'},
    {'name':'Fred', 'code':'2002'},
    {'name':'Dave', 'code':'4004'},
];

let newpanels = news.map(item => {
    let panel = panels.find(pnl => pnl.number === item.code);

    let data;
    if(panel){
        data = panel;
    }else{
        data = {
            name: item.name,
            number: item.code,
            interaction:{
                answer: 0,
                hangup: 0
            }
        };
    }
    return data;
});

console.log(newpanels);
// Result:
// [
//     {
//       name: 'Jhon',
//       number: '1001',
//       interaction: { answer: 1, hangup: 1 }
//     },
//     {
//       name: 'Carl',
//       number: '2002',
//       interaction: { answer: 2, hangup: 1 }
//     },
//     {
//       name: 'Dave',
//       number: '4004',
//       interaction: { answer: 0, hangup: 0 }
//     }
//   ]