const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'statement',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'statement',
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

        delete action['act']['data'];
    }
};

module.exports = {hyperionModule};
