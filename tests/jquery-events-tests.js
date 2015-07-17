/* globals global, require, describe, before, beforeEach, it */

var expect = require('chai').expect;
var jsdom = require('jsdom');
var jq = require('jquery');

describe('PureJS Sample tests', function() {
  var htmlTemplate = '<div id="content"></div><button id="btn"></button>';

  before(function(done) {
    jsdom.env({
      html: '',
      done: function(errors, window) {
        global.window = window;
        global.document = window.document;
        global.$ = jq(window);
        done();
      }
    });
  });

  beforeEach(function() {
    document.body.innerHTML = htmlTemplate;
  });

  it('expect click to change the content ', function() {
    $('#btn').click(function() {
      $('#content').html('clicked');
    });

    $('#btn').click();
    expect($('#content').html()).to.equal('clicked');
  });

  it('expect click to change the display', function() {
    var $btn = $('#btn'),
      $content = $('#content');
    $btn.on('click', function() {
      var display = $content.css('display');
      if (display === 'none') {
        $content.css('display', '');
      } else {
        $content.css('display', 'none');
      }
    });

    expect($content.css('display')).to.equal('');
    $btn.click();
    expect($content.css('display')).to.equal('none');
    $btn.click();
    expect($content.css('display')).to.equal('');
  });
});
