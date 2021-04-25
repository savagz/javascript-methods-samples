const resultData = [
    { 'channel': 'INCOMING', 'queue': 'Web', 'agent': '6061' },
    { 'channel': 'INCOMING', 'queue': 'Web', 'agent': '6062' },
    { 'channel': 'INCOMING', 'queue': 'Web', 'agent': '6063' },
    { 'channel': 'INCOMING', 'queue': 'Web', 'agent': '6064' },
    { 'channel': 'INCOMING', 'queue': 'Chat', 'agent': '6061' },
    { 'channel': 'INCOMING', 'queue': 'Chat', 'agent': '6065' },
    { 'channel': 'INCOMING', 'queue': 'Chat', 'agent': '6066' },
    { 'channel': 'INCOMING', 'queue': 'Chat', 'agent': '6064' }
];

// Groups
const finalData = [...new Set(resultData.map(item => item.channel))].map(_channel => {
    return {
        channel: _channel,
        queues: [...new Set(resultData.filter(item => item.channel === _channel).map(el => el.queue))].map(_queue => {
            return {
                queue: _queue,
                agents: [...new Set(resultData.filter(item => item.channel === _channel && item.queue === _queue).map(el => el.agent))].map(_agent => {
                    return {
                        agent: _agent
                    };
                })                
            };
        })
    };
});

console.log(JSON.stringify(finalData));
