// Set up handlebars partials and helpers
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);
const templateutils = require('./template-utils');

hbs.registerHelper('list', templateutils.buildList);
hbs.registerHelper('index', templateutils.applyOnIndex);
hbs.registerHelper('timeline', templateutils.alternateBetweenInverted);
hbs.registerHelper('removeNonAlphaNumeric', templateutils.removeNonWords);

hbsutils.registerWatchedPartials(__dirname + '/../templates/partials');
