require('../casper-shim.js');

casper.test.begin('Dev page tests', 1, function suite(test) {
    casper.start("http://localhost:8000/#/devpage", function() {
        this.waitForSelector("#devpage-test",
            function pass() {
                test.assertExists('#devpage-test', 'Components were properly loaded');
            },
            function fail() {
                test.fail("Some component is broken");
            }
        );
    });

    casper.run(function() {
        test.done();
    });
});

