/* globals global, require, describe, before, beforeEach, it */

var chai = require('chai');
var jsdom = require('jsdom');
var jq = require('jquery');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);


describe('jQuery AJAX tests', function () {
    before(function (done) {
        jsdom.env({
            html: '<div',
            done: function (errors, window) {
                global.window = window;
                global.document = window.document;
                global.$ = jq(window);
                done();
            }
        });
    });

    it('Should work', function () {        

    });
});