Molecule API project.

To build and run the project on a Node.js instance that runs outside of a
container, execute the following from the project's root directory:
    npm install .

To run the unit tests, execute the following commands from the project's
root directory:
    npm test install mocha chai chai-http (to install testing framework)
    npm test (thereafter to execute tests)

From the project's main directory execute the following command to run
the application:
    node index.js


--------------


To build the project's Docker image, execute the following command:
    docker build -t molecule-api .

To run the project's Docker image, execute the following command:
    docker run -p 8080:8080 molecule-api

***** Note *****
If while attempting to run the target image you receive an error containing
the text "Error starting userland proxy: mkdir..." then restart the
Docker Desktop and retry running the image.

