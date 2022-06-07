import { Pool } from 'pg';
import { db } from '../config.js';

async function getConnection() {
    const pool = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port,
    });
    await pool.connect();
    return pool;
}

export default { getConnection };