var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

describe('jQuery Events: Sample tests', function() {
    var $,
        htmlTemplate = '<button id="btn"></button><div id="content"></div>';
    jsdom();

    beforeEach(function() {
        $ = require('jquery');
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
