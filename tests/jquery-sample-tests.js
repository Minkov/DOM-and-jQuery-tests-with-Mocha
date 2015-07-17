/* globals global, require, describe, before, beforeEach, it */

var expect = require('chai').expect;
var jsdom = require('jsdom');
var jq = require('jquery');

describe('PureJS Sample tests', function() {
  var htmlTemplate = '<div id="root"></div>';

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

  it('Has jQuery', function() {
    expect($).to.exist;
  });

  it('Simple Test jQuery', function() {
    var $div = $('<div>hello <b>world</b></div>');
    expect($div.html()).to.eql('hello <b>world</b>');
  });

  it('Expect to contain div with ID #root', function() {
    var $root = $(document.body).find('#root');
    expect($root).to.exist;
    expect($root.is('div')).to.be.ok;
  });

  it('Expect to #root to contain 5 divs', function() {
    var i,
      count = 5,
      root = document.getElementById('root');
    for (i = 0; i < count; i += 1) {
      root.innerHTML += '<div>' + 'Div #' + i + '</div>';
    }
    console.log(document.body.innerHTML);

    expect($('#root div').length).to.equal(count);
  });
});
