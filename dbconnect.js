'use strict';

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  port: 3306, 
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

con.on('error', function(err) {
  console.loh('Database error: ', err);
} 
);


module.exports = con;