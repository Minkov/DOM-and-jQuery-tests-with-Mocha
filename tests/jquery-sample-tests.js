/* globals global, require, describe, before, beforeEach, it */
var result = require('../tasks/jquery-sample')();
var expect = require('chai').expect;
var jsdom = require('jsdom');
var jq = require('jquery');


describe('jQuery Sample', function() {

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

  describe('Valid Tests', function() {
    it('expect element to contain 5 divs with the provided contents', function() {
      document.body.innerHTML = '<div id="root"></div>';
      var count = 5,
        contents = Array.call(Array, {
          length: count
        })
        .map(function(_, index) {
          return 'Content #' + index;
        });
      var root = document.getElementById('root');
      result(root, contents);
      var divs = root.getElementsByTagName('div');
      expect(divs).to.exist;
      contents.forEach(function(content, index) {
        expect(divs[index]).to.exist;
        expect(divs[index].innerHTML).to.equal(content);
      });
    });

    it('expect #root to contain 5 divs with the provided contents', function() {
      document.body.innerHTML = '<div id="root"></div>';
      var count = 5,
        contents = Array.call(Array, {
          length: count
        })
        .map(function(_, index) {
          return 'Content #' + index;
        });
      var root = document.getElementById('root');
      result('#root', contents);
      var divs = root.getElementsByTagName('div');
      expect(divs).to.exist;
      contents.forEach(function(content, index) {
        expect(divs[index]).to.exist;
        expect(divs[index].innerHTML).to.equal(content);
      });
    });
  });

  describe('Invalid tests', function() {
    it('expect to throw, when nothing is passed as parameter', function() {
      document.body.innerHTML = '<div id="root"></div>';     

      function test() {
        result();
      }
      expect(test).to.throw();
    });

    it('expect to throw, when undefined is passed as first parameter, second is valid', function() {
      document.body.innerHTML = '<div id="root"></div>';      

      function test() {
        result(undefined, ['Test']);
      }
      expect(test).to.throw();
    });

    it('expect to throw, when null is passed as first parameter, second is valid', function() {
      document.body.innerHTML = '<div id="root"></div>';      

      function test() {
        result(null, ['Test']);
      }
      expect(test).to.throw();
    });

    it('expect to throw, when id of non-existing element is passed as first parameter, second is valid', function() {
      document.body.innerHTML = '<div id="root"></div>';      

      function test() {
        result('THIS_IS_INVALID_ID', ['Test']);
      }
      expect(test).to.throw();
    });


    it('expect to throw, when no contents array is passed, the ID is valid', function() {
      document.body.innerHTML = '<div id="root"></div>';     

      function test() {
        result('root');
      }
      expect(test).to.throw();
    });

    it('expect to throw, when null is passed as contents array, the ID is valid', function() {
      document.body.innerHTML = '<div id="root"></div>';      

      function test() {
        result('root');
      }
      expect(test).to.throw();
    });

    it('expect to throw and the root content to remain unchanged, when contents array contains element different that string or number, the ID is valid', function() {
      
      document.body.innerHTML = '<div id="root"></div>';
      var root = document.getElementById('root'),
        innerHTML = root.innerHTML;

      function test() {
        result('root', [1, [], 'Test']);
      }
      expect(test).to.throw();
      expect(innerHTML).to.equal(root.innerHTML);
    });
  });
});
