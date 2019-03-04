'use strict';


// Main entry point into Molecule Classifier application.

var app;

// File System module.
const fs = require('fs');

// File Path module.
const path = require('path');

// HTTP module.
const http = require('http');

// Connect HTTP server framework module.
const connect = require('connect')();

// Swagger tools library module.
const swaggerTools = require('swagger-tools');

// YAML parser library module.
const jsyaml = require('js-yaml');

// Fetch the port to use from the environment variable PORT.
// Default to 8080 if no value given.
const serverPort = process.env.PORT || 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  connect.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  connect.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  connect.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  connect.use(middleware.swaggerUi());
});

// Start the server
app = http.createServer(connect).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

module.exports = app;

