var _ = require('./underscore.template');
var UnderscoreTemplate = _.template;

/**
 * @param text
 * @param data
 * @param settings
 * @return {String|Function}
 * @constructor
 */
function Template(text, data, settings) {
    var tpl = UnderscoreTemplate(text, settings);
    if (data) {
        return tpl(data);
    }

    return tpl;
}

Template._ = _;
module.exports = Template;

// If we're in the browser,
// define it if we're using AMD, otherwise leak a global.
if (typeof define === 'function' && define.amd) {
    define(function() {
        return Template;
    });
} else if (typeof window !== 'undefined' || typeof navigator !== 'undefined') {
    window.UnderscoreTemplate = Template;
}
