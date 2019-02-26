'use strict';

var Molecule = require('../service/MoleculeService');

module.exports.classifyMolecule = function classifyMolecule (req, res, next) {
  const body = req.swagger.params["body"].value;
  Molecule.classifyMolecule(body, res, next);
};
