require('should');

const UnderscoreTemplate = require('../lib/index');

describe('underscore.template', function() {
    it('normal', function() {
        let template = UnderscoreTemplate("<b><%- value %></b>");

        let result = template({value: 'hello world!'});
        result.should.equal('<b>hello world!</b>');
    });

    it('escape', function() {
        let template = UnderscoreTemplate("<b><%- value %></b>");

        let result = template({value: '<script>'});
        result.should.equal('<b>&lt;script&gt;</b>');
    });

    it('multi-line works', function() {
        let comment = '/**\n' +
            ' * <%= pkg.name %> <%= pkg.version %>\n' +
            ' * <%= pkg.name %> <%= pkg.version %>\n' +
            ' */\n\n';
        let res = '/**\n' +
            ' * awesome 0.1.2\n' +
            ' * awesome 0.1.2\n' +
            ' */\n\n';
        UnderscoreTemplate(comment, {
            pkg: {
                name: 'awesome',
                version: '0.1.2'
            }
        }).should.equal(res);
    });
});