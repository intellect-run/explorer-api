const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'statement',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'statement',

    mappings: {
        action: {
            "@statement": {
                "properties": {
                    "coopname": {"type": "keyword"},
                    "username": {"type": "keyword"},
                    "action": {"type": "keyword"},
                    "decision_id": {"type": "long"},
                    "batch_id": {"type": "long"},
                    "statement": {"enabled": false}
                }
            }
        }
    },

    handler: (action) => {
        const data = action['act']['data'];
           
        action['@statement'] = {
            coopname: data.coopname,
            username: data.username,
            action: data.action,
            decision_id: data.decision_id,
            batch_id: data.batch_id,
            statement: data.statement
        };

        
    }
};

module.exports = {hyperionModule};
