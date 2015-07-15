var solve = require('../tasks/pure-js');
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

describe('Initial tests', function() {
    var $,
        htmlTemplate = '<div id="root"></div>';
    jsdom();

    beforeEach(function(){
        $ = require('jquery');
        document.body.innerHTML = htmlTemplate;
    });

    it('Has window', function(){
        expect(window).to.exist;
    });

    it('Has jQuery', function(){
        expect($).to.exist;
    });

    it('Simple Test jQuery', function(){
        var div = $('<div>hello <b>world</b></div>');
        expect(div.html()).to.eql('hello <b>world</b>');
    });

    it('Expect to contain div with ID #root', function(){
        var div = $('#root');
        expect(div).to.exist;
        expect(div.is('div')).to.be.ok;
    });

    it('Expect to #root to contain 5 divs', function(){
        var i,
            count = 5,
            $root = $('#root');
        for(i = 0; i < count; i += 1){
            $root.append($('<div/>').html('Item #' + i));
        }
        expect($root.find('div').length).to.equal(count);
    });
});