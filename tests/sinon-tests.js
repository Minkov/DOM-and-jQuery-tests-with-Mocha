/* globals require, console, it */

const expect = require("chai").expect,
    sinon = require("sinon");

// var result = require("../tasks/sinon-task");


it("Expect to work", () => {
    const message = "It works!";
    sinon.spy(console, "log");

    console.log(message);

    expect(console.log.getCall(0).args[0]).to.equal(message);
});