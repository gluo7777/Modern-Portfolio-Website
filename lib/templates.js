// Set up handlebars partials and helpers
const hbs = require('hbs');
hbs.registerHelper('list', (items,options) => 
    items.reduce( (prev, cur) => prev + options.fn(cur), '' )
);

hbs.registerHelper('index', (items,pos,options) => options.fn(items[pos]));

hbs.registerPartials(__dirname + '/../templates/partials');