// use jest and rewire to test private methods
const templateutils = require('./template-utils');

test('templateutils.buildList correctly builds list.', () => {
    let options = { fn: (obj) => obj.toUpperCase() }; // create dummy function
    let items = ['a', 'b', 'c'];
    expect(templateutils.buildList(items, options)).toBe('ABC');
});