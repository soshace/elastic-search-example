const Sequelize = require('sequelize');
const sequelize = require('../connect');
const modelNames = require('../../config/models');

const remove = () => sequelize.queryInterface.dropTable(modelNames.customer.table);
const create = () => sequelize.queryInterface.createTable(
    modelNames.customer.table,
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        'account_name': Sequelize.STRING,
        'phone': Sequelize.STRING,
        'city': Sequelize.STRING,
        'country': Sequelize.STRING,
        'email': {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        'address': Sequelize.STRING,
        'secondary_address': Sequelize.STRING,
        'firstname': Sequelize.STRING,
        'lastname': Sequelize.STRING
    }
);

module.exports = {
    remove,
    create
};