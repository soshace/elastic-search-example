const Sequelize = require('sequelize');
const config = require('../config/database').database;

module.exports = new Sequelize(`${config.connectionString}/${config.dbName}`, config.options);