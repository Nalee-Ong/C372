const mysql = require('mysql2');

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nal210804',
  database: 'petcare'
});

module.exports = connection;
