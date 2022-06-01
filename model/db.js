const { Pool } = require('pg');
const config = require('../config.js');

async function getConnection() {
    const pool = new Pool({
        user: config.db.user,
        host: config.db.host,
        database: config.db.database,
        password: config.db.password,
        port: config.db.port,
    });
    await pool.connect();
    return pool;
}

module.exports = { getConnection };