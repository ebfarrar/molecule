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
    function buildErrorResponse(message, type) {
      var payload = {};
      payload.message = message;
      payload.type = type;
 
      return payload;
    }

    // If no parameters/message body supplied then return an error response.
    if (!body || (typeof body.weight === "undefined")) {
      utils.writeJson(
        res,
        buildErrorResponse("Parameters not supplied", "CLIENT ERROR"),
        400);

      return;
    }

    const moleculeWeight = parseInt(body.weight);

    // Return error if the "weight" isn't a number or is less than 1.
    if (isNaN(moleculeWeight)) {
      // Set HTTP status code to 400 and send error response.
      utils.writeJson(
        res,
        buildErrorResponse("No weight was supplied", "CLIENT ERROR"),
        400);

        return;
    } else if (moleculeWeight < 1) {
      // Set HTTP status code to 400 and send error response.
      utils.writeJson(
        res,
        buildErrorResponse(`Invalid weight: ${moleculeWeight}`, "CLIENT ERROR"),
        400);

      return;
    }

    // Is the molecular weight a multiple of 3?
    const isMultipleThree = (moleculeWeight % 3 == 0);

    // Is the molecular weight a multiple of 5?
    const isMultipleFive = (moleculeWeight % 5 == 0);

    var molecularType;

    // If the molecular weight is a multiple of 3 then the molecule is a protein.  If the 
    // molecular weight is a multiple of 5 then the molecule is a carbohydrate.  If the
    // weight is a multiple of both 3 and 5 then the molecule is a lipid.  All other
    // molecules are classified as nucleic acids. 
    if (isMultipleThree && isMultipleFive) {
      molecularType = "LIPID";
    } else if (isMultipleThree) {
      molecularType = "PROTEIN";
    } else if (isMultipleFive) {
      molecularType = "CARBOHYDRATE";
    } else {
      molecularType = "NUCLEIC ACID";
    }

    // Set HTTP status code to 200 and send the weight and the classification.
    utils.writeJson(
      res,
      buildSuccessResponse(moleculeWeight, molecularType),
      200);
}

