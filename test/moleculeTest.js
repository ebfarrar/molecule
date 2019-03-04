"use strict";

//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev/test dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");

// The server on which the test is to be run.
const server = require("../index.js");

const should = chai.should();

chai.use(chaiHttp);

// Test request message bodies.
const moleculeWeight03 = '{"weight" : 3}';
const moleculeWeight09 = '{"weight" : 9}';

const moleculeWeight05 = '{"weight" : 5}';
const moleculeWeight10 = '{"weight" : 10}';

const moleculeWeight15 = '{"weight" : 15}';
const moleculeWeight30 = '{"weight" : 30}';

const moleculeWeight02 = '{"weight" : 2}';
const moleculeWeight04 = '{"weight" : 4}';
const moleculeWeight11 = '{"weight" : 11}';

const moleculeWeight00 = '{"weight" : 0}';
const moleculeWeightN2 = '{"weight" : -2}';


describe("Classification", function () {
  /*
   * Test the POST "v1/molecule/classify" routes.
   */

  // Send {"weight" : 3}
  describe("POST classification " + moleculeWeight03, function () {
    it("it should return PROTEIN", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight03)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 3, "type": "PROTEIN" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(3);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("PROTEIN");

            done();
          }
        });
    });
  });

  // Send {"weight" : 9}
  describe("POST classification " + moleculeWeight09, function () {
    it("it should return PROTEIN", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight09)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 9, "type": "PROTEIN" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(9);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("PROTEIN");

            done();
          }
        });
    });
  });

  // Send {"weight" : 5}
  describe("POST classification " + moleculeWeight05, function () {
    it("it should return CARBOHYDRATE", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight05)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 5, "type": "CARBOHYDRATE" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(5);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("CARBOHYDRATE");

            done();
          }
        });
    });
  });

  // Send {"weight" : 10}
  describe("POST classification " + moleculeWeight10, function () {
    it("it should return CARBOHYDRATE", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight10)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 10, "type": "CARBOHYDRATE" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(10);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("CARBOHYDRATE");

            done();
          }
        });
    });
  });

  // Send {"weight" : 15}
  describe("POST classification " + moleculeWeight15, function () {
    it("it should return LIPID", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight15)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 15, "type": "LIPID" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(15);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("LIPID");

            done();
          }
        });
    });
  });

  // Send {"weight" : 30}
  describe("POST classification " + moleculeWeight30, function () {
    it("it should return LIPID", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight30)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 30, "type": "LIPID" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(30);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("LIPID");

            done();
          }
        });
    });
  });

  // Send {"weight" : 2}
  describe("POST classification " + moleculeWeight02, function () {
    it("it should return NUCLEIC ACID", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight02)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 2, "type": "NUCLEIC ACID" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(2);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("NUCLEIC ACID");

            done();
          }
        });
    });
  });

  // Send {"weight" : 4}
  describe("POST classification " + moleculeWeight04, function () {
    it("it should return NUCLEIC ACID", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight04)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 4, "type": "NUCLEIC ACID" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(4);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("NUCLEIC ACID");

            done();
          }
        });
    });
  });

  // Send {"weight" : 11}
  describe("POST classification " + moleculeWeight11, function () {
    it("it should return NUCLEIC ACID", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight11)
        .end(function (err, res) {

          if (err) {
            console.log("*** err : " + err);

            done(err);
          } else {
            // Expected response: { "weight": 11, "type": "NUCLEIC ACID" }
            res.should.have.status(200);
            res.body.should.have.property("weight");
            res.body.weight.should.be.equals(11);

            res.body.should.have.property("type");
            res.body.type.should.be.equals("NUCLEIC ACID");

            done();
          }
        });
    });
  });

  // Send {"weight" : 0}
  describe("POST classification " + moleculeWeight00, function () {
    it("it should return CLIENT ERROR", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeight00)
        .end(function (err, res) {

          if (err) {
            res.should.have.status(400);
            res.body.should.have.property("message");
            res.body.message.should.be.equals("CLIENT ERROR");

            done();
          } else {
            done();
          }
        });
    });
  });

  // Send {"weight" : -2}
  describe("POST classification " + moleculeWeightN2, function () {
    it("it should return CLIENT ERROR", function (done) {
      chai.request(server)
        .post("/v1/molecule/classify")
        .set("Content-Type", "application/json")
        .send(moleculeWeightN2)
        .end(function (err, res) {

          if (err) {
            res.should.have.status(400);
            res.body.should.have.property("message");
            res.body.message.should.be.equals("CLIENT ERROR");

            done();
          } else {
            done();
          }
        });
    });
  });

});
