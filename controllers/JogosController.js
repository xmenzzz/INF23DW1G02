'use strict';

var utils = require('../utils/writer.js');
var JogosController = require('../service/JogosControllerService');

module.exports.retrieveJogos = function retrieveJogos (req, res, next) {
  JogosController.retrieveJogos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveJogosId = function retrieveJogosId (req, res, next, id_jogo) {
  JogosController.retrieveJogosId(id_jogo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
