const Sequelize = require('sequelize');
const sequelize = require('../connect');
const modelNames = require('../../config/models');
const esDecorator = require('../search/decorator');

const model = sequelize.define(modelNames.customer.model, {
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
}, {
    tableName: modelNames.customer.table,
    timestamps: false
});

model.getSearchOptions = () => {
    return {
        type: 'customers',
        keys: ['account_name', 'city', 'country' ]
    }
}

module.exports = esDecorator.decorate(model);
