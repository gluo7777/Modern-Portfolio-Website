const debug = require('debug')('portfolio-website:server'); // logging

/**
 * Normalize a port into a number, string, or false.
 */
module.exports.normalizePort = function (val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val; // named pipe
    else if (port >= 0) return port; // port
    else return false;
};

/**
 * Event listener for HTTP server "error" event.
 */
module.exports.buildErrorHandler = () => function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */
module.exports.buildListener = (addr) => function () {
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
};