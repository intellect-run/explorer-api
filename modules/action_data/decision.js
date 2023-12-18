const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'decision',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'decision',
    handler: (action) => {
        const data = action['act']['data'];
           
        action['@decision'] = {
            coopname: data.coopname,
            username: data.username,
            action: data.action,
            decision_id: data.decision_id,
            batch_id: data.batch_id,
            decision: data.decision
        };

        delete action['act']['data'];
    }
};

module.exports = {hyperionModule};
