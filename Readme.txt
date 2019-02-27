Molecule API project.

To build and run the project for executing on native Node.js instance, execute
the following command from the project's root directory:
    npm install .

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
the text "Error starting userland proxy: mkdir..." then restart
Docker Desktop and retry executing the image.

