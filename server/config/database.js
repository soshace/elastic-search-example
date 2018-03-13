module.exports = {
    database: {
        connectionString: 'postgres://localhost:5432',
        dbName: 'test_es_db',
        options: {
            dialect: 'postgres',
            pool: {
                max: 5,
                idle: 30000,
                acquire: 60000,
            }
        }
    },
    elasticSearch: {
        address: 'localhost:9200',
        log: 'info'
    }
};