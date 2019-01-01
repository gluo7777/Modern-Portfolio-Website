const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Templating */
app.set('views','./templates');
// set view engine to hbs - handlebars.js, an extension of mustache.js
// change template files to *.html instead of *.hbs
app.set('view engine','html');
// calls __express method from hbs object on .html files
app.engine('html', require('hbs').__express);
require('./lib/templates');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;
