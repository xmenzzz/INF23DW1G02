'use strict';

var utils = require('../utils/writer.js');
var JogadorController = require('../service/JogadorControllerService');

module.exports.retrieveJogador = function retrieveJogador (req, res, next) {
  JogadorController.retrieveJogador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveJogadorId = function retrieveJogadorId (req, res, next, id_jogador) {
  JogadorController.retrieveJogadorId(id_jogador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
