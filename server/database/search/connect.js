const elasticsearch = require('elasticsearch');
const config = require('../../config/database').elasticSearch;

module.exports = new elasticsearch.Client({
    host: config.address,
    log: config.log
});