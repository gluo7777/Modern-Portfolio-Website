// for each item in list, apply options.fn and concatenate with previous result
module.exports.buildList = function (items, options) {
    return items.reduce((prev, cur) => prev + options.fn(cur), '');
}

module.exports.applyOnIndex = (items, pos, options) => options.fn(items[pos]);

module.exports.alternateBetweenInverted = (items, options) => {
    let toggle = true;
    return items.reduce((prev, cur) => {
        cur['inverted'] = (toggle = !toggle);
        return prev + options.fn(cur);
    }, '');
};

module.exports.applyOnIndex = (items, pos, options) => options.fn(items[pos]);

module.exports.removeNonWords = (string, options) => options.fn(String(string).replace(/[^\w]/g, ''));