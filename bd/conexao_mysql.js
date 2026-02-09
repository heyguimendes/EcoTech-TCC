// Require do MySQL
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // no XAMPP geralmente é vazio
    database: 'ecotech',
    connectionLimit: 2
});

module.exports = () => pool;
