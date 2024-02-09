'use strict';

var sql = require('../dbconnect.js');

/**
 * Retrieve Estatistica
 *
 * returns List
 **/
exports.retrieveEstatistica = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM estatistica", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}

/**
 * Retrieve Estatistica by ID
 *
 * id_estatistica Long 
 * returns Estatistica
 **/
exports.retrieveEstatisticaId = function(id_estatistica) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM estatistica WHERE id = ?", [id_estatistica], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}

/**
 * Retrieve Estatistica on Temporada
 *
 * This functionality would depend on how estatistica is related to temporada.
 * Assuming there's a direct relation or a way to correlate them through another table.
 * Here's a placeholder implementation to be adapted based on actual schema.
 **/
exports.retrieveEstatisticaTemporadaId = function(id_temporada) {
  return new Promise(function(resolve, reject) {
    // Placeholder: The actual query depends on your database schema
    // For example, if `estatistica` has a `id_temporada` column:
    // sql.query("SELECT * FROM estatistica WHERE id_temporada = ?", [id_temporada], function (err, res) {
    
    // Placeholder response to indicate this needs to be implemented according to actual database schema.
    resolve("Function implementation depends on database schema relating estatistica to temporada.");
  });
}
