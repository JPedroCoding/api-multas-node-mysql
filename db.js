const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    port:3306,
    user:"root",
    password:"senha123",
    database:"multasdb",
});

module.exports = pool;