/* globals global, require, describe, before, beforeEach, it */
var result = require("../tasks/pure-js-sample");
var expect = require("chai").expect;
var jsdom = require("jsdom");
let path = require("path");
let util = require("util");

describe("PureJS Sample tests", function () {
  let vm = require("vm"),
    sandbox,
    consoleLogs = [],
    consoleFake = {
      "log": function (text) {
        consoleLogs.push(text.toString());
      }
    },
    userCode = require("fs").readFileSync(path.join(__dirname, "..", "tasks", "pure-js-sample.js"), "utf-8");

  before(function (done) {
    jsdom.env({
      html: "",
      done: function (errors, window) {
        global.window = window;
        global.document = window.document;
        sandbox = {
          "window": window,
          "document": window.document,
          "console": consoleFake
        };
        done();
      }
    });
  });

  describe("Valid Tests", function () {
    it("expect element to contain 5 divs with the provided contents", function () {
      consoleLogs = [];
      sandbox.document.body.innerHTML = "<div id=\"root\"></div>";
      vm.createContext(sandbox);
      var count = 5,
        contents = Array.from({
          "length": count
        })
          .map(function (_, index) {
            return "Content #" + index;
          });
      userCode = `(${userCode}())("root", ["${contents.join("\", \"")}"])`;
      vm.runInContext(userCode, sandbox);

      let root = sandbox.window.document.getElementById("root");

      var divs = root.getElementsByTagName("div");
      expect(divs).to.exist;
      contents.forEach(function (content, index) {
        expect(divs[index]).to.exist;
        expect(divs[index].innerHTML).to.equal(content);
      });
    });
  });
});
