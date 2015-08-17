/* globals global, require, describe, before, beforeEach, it */

var expect = require('chai').expect;
var jsdom = require('jsdom');
var jq = require('jquery');
var result = require('../tasks/jquery-events')();  
  

describe('jQuery Events tests', function() {
 
  before(function(done) {
    jsdom.env({
      html: '<div',
      done: function(errors, window) {
        global.window = window;
        global.document = window.document;      
        global.$ = jq(window);
        // Object.keys(window)
        //   .filter(function(prop){
        //     return prop.toLowerCase().indexOf('html')>=0;
        //   }).forEach(function(prop){
        //     global[prop] = window[prop];            
        //   });
        done();
      }
    });
  });

  it('Creates two elements: one with class .button and another with class .content', function() {
    document.body.innerHTML = '<div id="root"></div>';
    result('#root');
    var root = document.getElementById('root');
    var btn = root.getElementsByClassName('button')[0];
    var content = root.getElementsByClassName('content')[0];
    expect(btn).to.exist;
    expect(btn).to.be.an.instanceof(window.HTMLElement);
    expect(btn.innerHTML).to.equal('hide');
    
    expect(content).to.exist;
    expect(content).to.be.an.instanceof(window.HTMLElement);
    expect(content.innerHTML).to.equal('Content');            
  });
  
  it('Creates two elements: one with class .button and another with class .content', function() {
    document.body.innerHTML = '<div id="root"></div>';
    result('#root');
    var root = document.getElementById('root');
    var btn = root.getElementsByClassName('button')[0];
    var content = root.getElementsByClassName('content')[0];
    
    //check if they are defined
    expect(btn).to.exist;
    expect(content).to.exist;   
    expect(btn.innerHTML).to.equal('hide');
    expect(content.innerHTML).to.equal('Content');   
    
    expect(content.style.display).to.equal('');
        
    var event = new window.MouseEvent('click');
    btn.dispatchEvent(event);    
    
    expect(btn.innerHTML).to.equal('show');
    expect(content.style.display).to.equal('none');
    
    btn.dispatchEvent(event);
    
    expect(btn.innerHTML).to.equal('hide');
    expect(content.style.display).to.equal('');
  });
});
