const Customer = require('../model/customer');
const esClient = require('../search/connect');
const config = require('../../config/database').database;

const findEntries = async (search) => {
    if (search.search) {
        let queryVal = search.search;

        console.log(await esClient.search({
            size: 1000,
            index: `${config.dbName}_customers`,
            q: `*${queryVal}*`
        }))

        let customerRes = (await esClient.search({
            size: 1000,
            index: `${config.dbName}_customers`,
            q: `*${queryVal}*`
        })).hits.hits.map(entry => entry._id);

        return {id: customerRes};
    } else {
        return {};
    }
};

module.exports.all = async (page, limit, search) => {
    const searchFilter = await findEntries(search);

    return Customer.findAll(Object.assign(
        {
            where: searchFilter,
            order: [
                ['id', 'ASC']
            ]
        }, {
            offset: page * limit,
            limit
        }
        )
    );
};

module.exports.count = async (search) => {
    const searchFilter = await findEntries(search);

    return Customer.findAndCountAll({
        where: searchFilter
    });
};