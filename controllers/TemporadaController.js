'use strict';

var utils = require('../utils/writer.js');
var TemporadaController = require('../service/TemporadaControllerService');

module.exports.retrieveTemporada = function retrieveTemporada (req, res, next) {
  TemporadaController.retrieveTemporada()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTemporadaId = function retrieveTemporadaId (req, res, next, id_temporada) {
  TemporadaController.retrieveTemporadaId(id_temporada)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
