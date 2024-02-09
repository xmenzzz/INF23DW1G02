'use strict';

var sql = require('../dbconnect.js');

/**
 * Retrieve Jogos
 *
 * returns List
 **/
exports.retrieveJogos = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM jogo", function (err, res){
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
 * Retrieve Jogos by ID
 *
 * id_jogos Long 
 * returns Jogos
 **/
exports.retrieveJogosId = function(id_jogo) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM jogo WHERE id = ?", [id_jogo], function (err, res){
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
 * Retrieve Jogos on temporada
 *
 * id_jogos Long 
 * returns Temporada
 **/
exports.retrieveJogosTemporadaId = function(id_jogo) {
  return new Promise(function(resolve, reject) {
    // Placeholder: Adjust according to actual relationship in your schema
    resolve("Function implementation depends on database schema.");
  });
}
