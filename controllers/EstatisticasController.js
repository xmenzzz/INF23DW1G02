'use strict';

var utils = require('../utils/writer.js');
var EstatisticasController = require('../service/EstatisticasControllerService');

module.exports.retrieveEstatistica = function retrieveEstatistica (req, res, next) {
  EstatisticasController.retrieveEstatistica()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEstatisticaId = function retrieveEstatisticaId (req, res, next, id_estatistica) {
  EstatisticasController.retrieveEstatisticaId(id_estatistica)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
