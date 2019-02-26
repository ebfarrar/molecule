'use strict';

// Module for writting json to response.
var utils = require('../utils/writer.js');

/**
 * Classify a molecule
 * 
 *
 * body Molecule Molecule object to be classified
 * returns Molecule
 **/
exports.classifyMolecule = function(body, res, next) {

    // Build a "SUCCESS" payload.
    function buildSuccessResponse(weight, type) {
      var payload = {};
      payload.weight = weight;
      payload.type = type;
 
      return payload;
    }

    // Build a "FAILURE" payload.
    function buildErrorResponse(message) {
      var payload = {};
      payload.message = message;

      return payload;
    }

    // Send JSON reply to HTTP client.
    function reply(message, code) {
      utils.writeJson(res, message, code);
    }

    // Return an error if no parameters were supplied.
    if (!body || (typeof body.weight === "undefined")) {
      console.log("Parameters not supplied");

      // Set HTTP status code to 400 and send error response.
      reply(buildErrorResponse("CLIENT ERROR"), 400);

      return;
    }

    const moleculeWeight = parseInt(body.weight);

    // Return error if the "weight" isn't a number or is less than 1.
    if (isNaN(moleculeWeight)) {
      console.log("No weight was supplied");

      // Set HTTP status code to 400 and send error response.
      reply(buildErrorResponse("CLIENT ERROR"), 400);

      return;
    } else if (moleculeWeight < 1) {
      console.log("Invalid weight: " + moleculeWeight);

      // Set HTTP status code to 400 and send error response.
      reply(buildErrorResponse("CLIENT ERROR"), 400);

      return;
    }

    // Is the molecule weight a multiple of 3?
    const isMultipleOfThree = (moleculeWeight % 3 == 0);

    // Is the molecule weight a multiple of 5?
    const isMultipleOfFive = (moleculeWeight % 5 == 0);

    // PROTEIN, CARBOHYDRATE, LIPID, or NUCLEIC ACID?
    var moleculeType;

    // If the molecular weight is a multiple of 3 then the molecule is a
    // protein.  If the molecular weight is a multiple of 5 then the molecule
    // is a carbohydrate.  If the weight is a multiple of both 3 and 5 then
    // the molecule is a lipid.  All other molecules are classified
    // as nucleic acids. 
    if (isMultipleOfThree && isMultipleOfFive) {
      moleculeType = "LIPID";
    } else if (isMultipleOfThree) {
      moleculeType = "PROTEIN";
    } else if (isMultipleOfFive) {
      moleculeType = "CARBOHYDRATE";
    } else {
      moleculeType = "NUCLEIC ACID";
    }

    // Set HTTP status code to 200 and send the weight and classification.
    reply(buildSuccessResponse(moleculeWeight, moleculeType), 200);
}

