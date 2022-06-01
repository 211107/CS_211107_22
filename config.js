const { database, password } = require("pg/lib/defaults");

//const { user, host, database, port } = require("pg/lib/defaults")
const { host } = require('pg/lib/defaults');

module.exports = {
    //variables de entorno
    api: {
        port: process.env.API_PORT || 3000,
    },
    db: {
        user: 'postgres',
        host: 'localhost',
        database: 'CSDB',
        password: 'esme24122001',
        port: '5432'
    }

}