'use strict';

var sql = require('../dbconnect.js');

/**
 * Retrieve Equipa
 *
 * returns List
 **/
exports.retrieveEquipa = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM equipa",  function (err, res){
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
 * Retrieve Equipa by ID
 *
 * id_equipa Long 
 * returns Equipa
 **/
exports.retrieveEquipaId = function(id_equipa) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM equipa WHERE id = ?", [id_equipa], function (err, res){
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
 * Retrieve Equipa on temporada
 *
 * id_equipa Long 
 * returns Temporada
 **/
exports.retrieveEquipaTemporadaId = function(id_equipa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_temporada" : 0,
  "nome_temporada" : "nome_temporada",
  "pontos_acumulados" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

exports.createEquipa = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO equipa (nome) Values(?)", [body.nome], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}