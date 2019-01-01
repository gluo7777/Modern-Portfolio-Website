// Set up handlebars partials and helpers
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);

hbs.registerHelper('list', (items, options) =>
    items.reduce((prev, cur) => prev + options.fn(cur), '')
);

hbs.registerHelper('index', (items, pos, options) => options.fn(items[pos]));

hbs.registerHelper('timeline', (items, options) => {
    let toggle = true;
    return items.reduce((prev, cur) => {
        cur['inverted'] = (toggle = !toggle);
        return prev + options.fn(cur);
    }, '');
});

hbs.registerHelper('removeNonAlphaNumeric', (string, options) => options.fn(String(string).replace(/[^\w]/g, '')));

hbsutils.registerWatchedPartials(__dirname + '/../templates/partials');