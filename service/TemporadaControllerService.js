'use strict';


/**
 * Retrieve Temporada
 *
 * returns List
 **/
exports.retrieveTemporada = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_temporada" : 0,
  "nome_temporada" : "nome_temporada",
  "pontos_acumulados" : 6
}, {
  "id_temporada" : 0,
  "nome_temporada" : "nome_temporada",
  "pontos_acumulados" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

