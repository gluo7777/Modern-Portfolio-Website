// Set up handlebars partials and helpers
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);
const templateutils = require('./template-utils');

const env = process.env.NODE_ENV || "production";

hbs.registerHelper('list', templateutils.buildList);
hbs.registerHelper('index', templateutils.applyOnIndex);
hbs.registerHelper('timeline', templateutils.alternateBetweenInverted);
hbs.registerHelper('removeNonAlphaNumeric', templateutils.removeNonWords);

// no need to watch file system in production
if(env !== "production"){
    hbsutils.registerWatchedPartials(__dirname + '/../templates/partials');
}else{
    hbs.registerPartials(__dirname + '/../templates/partials')
}
