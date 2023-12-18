const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'act',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'act',

    mappings: {
        action: {
            "@act": {
                "properties": {
                    "coopname": {"type": "keyword"},
                    "username": {"type": "keyword"},
                    "action": {"type": "keyword"},
                    "decision_id": {"type": "long"},
                    "batch_id": {"type": "long"},
                    "act": {"enabled": false},
                }
            }
        }
    },

    handler: (action) => {
        const data = action['act']['data'];
        
        action['@act'] = {
            coopname: data.coopname,
            username: data.username,
            action: data.action,
            decision_id: data.decision_id,
            batch_id: data.batch_id,
            act: data.act
        };

        delete action['act']['data'];
    }
};

module.exports = {hyperionModule};
