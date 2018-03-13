const customerTable = require('../table/customers');

const removeTables = () => {
    return customerTable.remove();
};

const createTables = () => {
    return customerTable.create();
};

removeTables()
    .then(() => createTables())
    .then(() => process.exit(-1));