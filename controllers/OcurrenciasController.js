'use strict';

var utils = require('../utils/writer.js');
var OcurrenciasController = require('../service/OcurrenciasControllerService');

module.exports.retrieveOcurrencia = function retrieveOcurrencia (req, res, next) {
  OcurrenciasController.retrieveOcurrencia()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveOcurrenciaId = function retrieveOcurrenciaId (req, res, next, id_ocurrencia) {
  OcurrenciasController.retrieveOcurrenciaId(id_ocurrencia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
