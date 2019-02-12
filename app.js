// IMPORTANT: https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
// __dirname is directory where the executed script resides, while ./ is directory from which the node command was executed
// exception is ./ inside require always evaluates relatively

// Imports
const httputil = require('./http/http-util');
const express = require('./http/express-config');
const path = require('path');

// Constants
const DEFAULT_PORT = '3000';

// Determine environment variables
const port = httputil.normalizePort(process.env.PORT || DEFAULT_PORT);
// sets up actual server
const server = require('http').createServer(
    express.buildRequestListener(port, path.join(__dirname, 'public'), path.join(__dirname, 'templates')));
server.listen(port);
server.on('error', httputil.buildErrorHandler());
server.on('listening', httputil.buildListener(server.address()));







