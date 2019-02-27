FROM node:latest
WORKDIR /molecule
COPY package.json /molecule
RUN npm install --save swagger-node-codegen
COPY . /molecule
CMD node index.js
EXPOSE 8080
