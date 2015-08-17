/* globals global, require, describe, before, beforeEach, afterEach, it */

var jsdom = require('jsdom'),
    jq = require('jquery');

var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;


chai.use(sinonChai);

describe('jQuery AJAX tests', function () {
    before(function (done) {
        jsdom.env({
            html: '',
            done: function (errors, window) {
                global.window = window;
                global.document = window.document;
                global.$ = jq(window);
                done();
            }
        });
    });
    var stub,
        data,
        lastId;


    beforeEach(function () {
        data = [];
        lastId = 0;
        stub = sinon.stub($, 'ajax', function (url, options) {
            if (typeof url === 'object') {
                options = url;
            } else {
                options.url = url;
            }
            options.method = (options.method || 'GET').toLowerCase();
            var success = options.success || options.done || function () {};
            // var error = options.error || options.fail || function () {};

            switch (options.method) {
            case 'get':
                success(data);
                break;
            case 'post':
                var obj = options.data;
                obj.id = lastId += 1;
                data.push(obj);
                success(obj);
                break;
            }
        });
    });

    afterEach(function () {
        $.ajax.restore();
    });

    it('expect to return an empty array, when no items in the array, url is provided as first param', function () {
        var spy = sinon.spy();
        var url = 'http://minkov.it';

        $.ajax(url, {
            success: spy
        });

        expect(spy.called).to.be.true;
        expect(spy.calledWith(data)).to.be.true;
        var isUrlIsUrlAsParam = stub.calledWithMatch(url),
            isUrlInOptions = stub.calledWithMatch({
                url: url
            });
        expect(isUrlInOptions || isUrlIsUrlAsParam).to.be.true;
    });

    it('expect to return an empty array, when no items in the array, url is provided in the options', function () {
        var spy = sinon.spy();
        var url = 'http://minkov.it';

        $.ajax({
            url: url,
            success: spy
        });

        expect(spy.called).to.be.true;
        expect(spy.calledWith(data)).to.be.true;
        var isUrlIsUrlAsParam = stub.calledWithMatch(url),
            isUrlInOptions = stub.calledWithMatch({
                url: url
            });
        expect(isUrlInOptions || isUrlIsUrlAsParam).to.be.true;
    });

    it('expect data to has a length of 1, when a single object is added', function () {
        var spy = sinon.spy();
        var url = 'http://minkov.it';

        var obj = {
            name: 'Doncho'
        };

        $.ajax(url, {
            method: 'POST',
            success: spy,
            data: obj
        });

        expect(spy.called).to.be.true;
        expect(spy.calledWithMatch(obj)).to.be.true;
        expect(data[0]).to.eql(obj);

        var isUrlIsUrlAsParam = stub.calledWithMatch(url),
            isUrlInOptions = stub.calledWithMatch({
                url: url
            });
        expect(isUrlInOptions || isUrlIsUrlAsParam).to.be.true;
    });
});