'use strict';


/**
 * Retrieve Ocurrencias
 *
 * returns List
 **/
exports.retrieveOcurrencia = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "num_faltas" : 6,
  "num_cartao" : 5,
  "substituicao" : 2,
  "num_golos" : 1,
  "minutos" : 5.637377,
  "id_ocurrencia" : 0
}, {
  "num_faltas" : 6,
  "num_cartao" : 5,
  "substituicao" : 2,
  "num_golos" : 1,
  "minutos" : 5.637377,
  "id_ocurrencia" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Ocurrencias by ID
 *
 * id_ocurrencia Long 
 * returns Ocurrencias
 **/
exports.retrieveOcurrenciaId = function(id_ocurrencia) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "num_faltas" : 6,
  "num_cartao" : 5,
  "substituicao" : 2,
  "num_golos" : 1,
  "minutos" : 5.637377,
  "id_ocurrencia" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

