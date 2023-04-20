// Conection to DATABASE

const promise = require('bluebird');
//const { types } = require('pg-promise/typescript/pg-subset');
const options = {
    promiseLib: promise,
    query: () => {

    }
};

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue){
    return stringValue;
});

// Default database
const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgres',
    'password': 'admin'
}

const db = pgp(databaseConfig);

// Export module to use database config
module.exports = db;