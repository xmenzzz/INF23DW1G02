'use strict';


/**
 * Retrieve Jogos
 *
 * returns List
 **/
exports.retrieveJogos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome_equipa" : "nome_equipa",
  "id_equipa" : 0
}, {
  "nome_equipa" : "nome_equipa",
  "id_equipa" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Jogos by ID
 *
 * id_jogo Long 
 * returns Jogos
 **/
exports.retrieveJogosId = function(id_jogo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultado" : "resultado",
  "id_jogo" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

