const templateutils = require('./template-utils');

test('templateutils.buildList correctly builds list.', () => {
    let options = { fn: (obj) => obj.toUpperCase() }; // create dummy function
    let items = ['a', 'b', 'c'];
    expect(templateutils.buildList(items, options)).toBe('ABC');
});

test('templateutils.applyOnIndex applies function to correct element.', () => {
    let options = { fn: (obj) => obj.toUpperCase() }; // create dummy function
    let items = ['a', 'b', 'c'];
    expect(templateutils.applyOnIndex(items, 2, options)).toBe('C');
});

test('templateutils.alternateBetweenInverted correctly set the inverted field for each element.', () => {
    let options = { fn: (obj) => new String(obj['inverted']) }; // create dummy function
    let items = [1, 2, 3].map(i => new Object());
    expect(templateutils.alternateBetweenInverted(items, options)).toBe('falsetruefalse');
});

test('templateutils.removeNonWords removes all non-word characters.', () => {
    let options = { fn: (obj) => obj }; // create dummy function
    expect(templateutils.removeNonWords('yo-what-up', options)).toBe('yowhatup');
});