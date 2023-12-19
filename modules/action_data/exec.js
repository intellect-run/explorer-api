const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'exec',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'exec',

    mappings: {
        action: {
            "@exec": {
                "properties": {
                    "executer": {"type": "keyword"},
                    "coopname": {"type": "keyword"},
                    "decision_id": {"type": "long"}
                }
            }
        }
    },

    handler: (action) => {
        const data = action['act']['data'];
        
        action['@exec'] = {
            executer: data.executer,
            coopname: data.coopname,
            decision_id: data.decision_id,
        };

        
    }
};

module.exports = {hyperionModule};
