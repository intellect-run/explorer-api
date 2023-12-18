const hyperionModule = {
    chain: "*",
    contract: '*',
    action: 'voteagainst',
    parser_version: ['3.2', '2.1','1.8','1.7'],
    defineQueryPrefix: 'voteagainst',
    handler: (action) => {
        const data = action['act']['data'];
        
        action['@voteagainst'] = {
            coopname: data.coopname,
            member: data.member,
            decision_id: decision_id
        };

        delete action['act']['data'];
    }
};

module.exports = {hyperionModule};
