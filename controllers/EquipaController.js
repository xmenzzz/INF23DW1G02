'use strict';

var utils = require('../utils/writer.js');
var EquipaController = require('../service/EquipaControllerService');

module.exports.retrieveEquipa = function retrieveEquipa (req, res, next) {
  EquipaController.retrieveEquipa()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEquipaId = function retrieveEquipaId (req, res, next, id_equipa) {
  EquipaController.retrieveEquipaId(id_equipa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEquipaTemporadaId = function retrieveEquipaTemporadaId (req, res, next, id_equipa) {
  EquipaController.retrieveEquipaTemporadaId(id_equipa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
