'use strict';

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307, 
  password: "secret",
  database: "temporada"
});

con.connect(function(err) {
  if (err) {
    console.log('Error on database connection!!!!! ');
    throw err;
}
console.log('Database connection active. ');
});

module.exports = con;