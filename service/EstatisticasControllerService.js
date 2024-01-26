'use strict';


/**
 * Retrieve Estatistica
 *
 * returns List
 **/
exports.retrieveEstatistica = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "golos_sofridos" : 1,
  "faltas_sofridas" : 5,
  "id_estatistica" : 0,
  "golos_marcados" : 6,
  "faltas_cometidas" : 5
}, {
  "golos_sofridos" : 1,
  "faltas_sofridas" : 5,
  "id_estatistica" : 0,
  "golos_marcados" : 6,
  "faltas_cometidas" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Estatisticas by ID
 *
 * id_estatistica Long 
 * returns Estatisticas
 **/
exports.retrieveEstatisticaId = function(id_estatistica) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "golos_sofridos" : 1,
  "faltas_sofridas" : 5,
  "id_estatistica" : 0,
  "golos_marcados" : 6,
  "faltas_cometidas" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

