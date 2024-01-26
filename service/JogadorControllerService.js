'use strict';


/**
 * Retrieve Jogador
 *
 * returns List
 **/
exports.retrieveJogador = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "numero_do_jogador" : 6,
  "id_jogador" : 0,
  "nome_do_jogador" : "nome_do_jogador"
}, {
  "numero_do_jogador" : 6,
  "id_jogador" : 0,
  "nome_do_jogador" : "nome_do_jogador"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "numero_do_jogador" : 6,
  "id_jogador" : 0,
  "nome_do_jogador" : "nome_do_jogador"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

