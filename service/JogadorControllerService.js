'use strict';

var sql = require('../dbconnect.js');

/**
 * Retrieve Jogador
 *
 * returns List
 **/
exports.retrieveJogador = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM jogador",  function (err, res){
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
 * Retrieve Jogador by ID
 *
 * id_jogador Long 
 * returns Jogador
 **/
exports.retrieveJogadorId = function(id_jogador) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM jogador WHERE id = ?", [id_jogador], function (err, res){
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
 * Retrieve Jogador on Temporada
 *
 * id_jogador Long 
 * returns Temporada
 * Note: This function's implementation heavily depends on your database schema and how jogador and temporada are related.
 **/
exports.retrieveJogadorTemporadaId = function(id_jogador) {
  // Implementation depends on your database schema
  return new Promise(function(resolve, reject) {
    // This is a placeholder implementation.
    resolve("Function implementation depends on database schema.");
  });
}
