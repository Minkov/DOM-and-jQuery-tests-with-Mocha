var solve = require('../tasks/pure-js');
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

// global.window = jsdom().createWindow();
// global.document = window.document;
// global.$ = require('jquery').create(window);

describe('Initial tests', function() {
    var $;
    jsdom();
    it('Has window', function(){
        expect(window).to.exist;

    });

    it('Has jQuery', function(){
        $ = require('jquery');
        expect($).to.exist;
    });

    it('Simple Test jQuery', function(){
        var div = $('<div>hello <b>world</b></div>');
        expect(div.html()).to.eql('hello <b>world</b>');
    });
//     // var $,
//     var htmlTemplate = '<div id="root"></div>';

//     // jsdom();
//     // $ = require('jquery');

// // ?    $ = require('jquery');

//     beforeEach(function() {
//         document.body.innerHTML = htmlTemplate;
//     });

//     describe('Valid Tests', function() {  
//        var div = $('<div>hello <b>world</b></div>');
//         expect(div.html()).to.eql('hello <b>world</b>');
//     });
});