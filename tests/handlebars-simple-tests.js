/* globals require, describe, it */
var expect = require('chai').expect,
    handlebars = require('handlebars'),
    templateString = require('../tasks/handlebars-sample')();

describe('Handlebars: Sample test', function() {
    it('Expect to work', function() {
        var template = handlebars.compile(templateString);

        var data = {
            "name": "Alan",
            "hometown": "Somewhere, TX",
            "kids": [{
                "name": "Jimmy",
                "age": "12"
            }, {
                "name": "Sally",
                "age": "4"
            }]
        };
        var actual = template(data);
        var expected = '<p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>' +
                        '<ul>' + 
                            '<li>Jimmy is 12</li>' +
                            '<li>Sally is 4</li>'  + 
                        '</ul>';

        expect(actual).to.equal(expected);
    });
});