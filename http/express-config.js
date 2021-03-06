module.exports.buildRequestListener = function (port, staticDir, viewDir) {
    const express = require('express');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');

    const app = express();
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(staticDir));

    // Configure server-side rendering with template engine
    app.set('views', viewDir);
    // set view engine to hbs - handlebars.js, an extension of mustache.js
    // change template files to *.html instead of *.hbs
    app.set('view engine', 'html');
    // calls __express method from hbs object on .html files
    app.engine('html', require('hbs').__express);
    // import js file with auto configuration code
    require('../lib/template-config');

    const indexRouter = require('./routes');
    app.use('/', indexRouter);
    app.set('port', port);

    return app;
};