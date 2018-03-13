const pgtools = require('pgtools');
const config = require('../../config/database').database;

pgtools.createdb(config.connectionString, config.dbName, function (err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    } else {
        console.log('Success!');
        process.exit(-1);
    }
});