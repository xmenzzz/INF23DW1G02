'use strict';

var sql = require('../dbconnect.js');

/**
 * Retrieve Temporada
 *
 * returns List
 **/
exports.retrieveTemporada = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM temporada", function (err, res){
      if (err) {
        console.log(err)
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
 * Retrieve Temporada by ID
 *
 * id_temporada Long 
 * returns Temporada
 **/
exports.retrieveTemporadaId = function(id_temporada) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM temporada WHERE id = ?", [id_temporada], function (err, res){
      if (err) {
        console.log(err)
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
 * Retrieve Temporada on temporada
 *
 * id_temporada Long 
 * returns Temporada
 **/
exports.retrieveTemporadaTemporadaId = function(id_temporada) {
  return new Promise(function(resolve, reject) {
    // This function does not make sense in the context of accessing a temporada by temporada ID as it's already done above.
    // Adjust or remove based on actual use case.
    resolve("Function implementation may need revision - accessing temporada by temporada ID is already covered in retrieveTemporadaId.");
  });
}
