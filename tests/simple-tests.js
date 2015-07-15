var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');


describe('Simple tests', function() {
    var htmlTemplate = '<div id="root"></div>';
    jsdom();

    beforeEach(function() {
        document.body.innerHTML = htmlTemplate;
    });

    it('expect `document` to exist', function() {
        expect(document.body).to.exist;
    });

    it('expect #root to exist and to a DIV', function() {
        var root = document.getElementById('root');
        expect(root).to.exist;
        expect(root).to.be.an.instanceof(HTMLDivElement);
    });
});