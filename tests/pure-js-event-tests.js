var solve = require('../tasks/pure-js-sample');
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

describe('PureJS Events Tests', function() {
    var htmlTemplate = '<div id="content"></div><button id="btn"></button>';
    jsdom();

    beforeEach(function() {
        document.body.innerHTML = htmlTemplate;
        document.getElementById('btn')
            .addEventListener('click', function() {
                document.getElementById('content').innerHTML += 'clicked';
            });
    });

    it('change innerHTML', function() {
        var button = document.getElementById('btn'),
            content = document.getElementById('content');
        button.addEventListener('click', function() {
            content.innerHTML = 'clicked';
        });
        var clickevent = document.createEvent("MouseEvents");
        clickevent.initEvent("click", true, true);
        button.dispatchEvent(clickevent);
    });

    it('change display', function() {
        var button = document.getElementById('btn'),
            content = document.getElementById('content');
        button.addEventListener('click', function() {
            var display = content.style.display;
            if (display === 'none') {
                content.style.display = '';
            } else {
                content.style.display = 'none';
            }
        });
        var clickevent = document.createEvent("MouseEvents");
        clickevent.initEvent("click", true, true);
        expect(content.style.display).to.equal('');
        button.dispatchEvent(clickevent);
        expect(content.style.display).to.equal('none');
        button.dispatchEvent(clickevent);
        expect(content.style.display).to.equal('');
    });
});
