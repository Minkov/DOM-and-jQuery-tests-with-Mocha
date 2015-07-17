/* globals global, require, describe, before, beforeEach, it */

var expect = require('chai').expect;
var jsdom = require('jsdom');

describe('PureJS Sample tests', function() {
  var htmlTemplate = '<div id="content"></div><button id="btn"></button>';

  before(function(done) {
    jsdom.env({
      html: '',
      done: function(errors, window) {
        global.window = window;
        global.document = window.document;
        for (var prop in window) {
          if (window.hasOwnProperty(prop)) {
            global[prop] = window[prop];
          }
        }
        done();
      }
    });
  });

  beforeEach(function() {
    document.body.innerHTML = htmlTemplate;
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

  it('change background color on mouseover', function() {
    var color = 'black';
    var content = document.getElementById('content');
    content.addEventListener('mouseover', function() {
      content.style.background = color;
    });
    content.addEventListener('mouseout', function() {
      content.style.background = '';
    });

    var mouseOverEvent = document.createEvent("MouseEvents");
    mouseOverEvent.initEvent("mouseover", true, true);

    expect(content.style.background).to.equal('');

    content.dispatchEvent(mouseOverEvent);
    expect(content.style.background).to.equal(color);

    var mouseOutEvent = document.createEvent("MouseEvents");
    mouseOutEvent.initEvent("mouseout", true, true);

    content.dispatchEvent(mouseOutEvent);
    expect(content.style.background).to.equal('');
  });
});
