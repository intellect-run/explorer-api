const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'batch',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'batch',
    handler: (action) => {
        const data = action['act']['data'];
        
        action['@batch'] = {
            coopname: data.coopname,
            action: data.action,
            batch_id: data.batch_id,
        };

        delete action['act']['data'];
    }
};

module.exports = {hyperionModule};
