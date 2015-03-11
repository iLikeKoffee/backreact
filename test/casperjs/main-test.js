require('../casper-shim.js');

casper.test.begin('Main page tests', 3, function suite(test) {
    casper.start("http://localhost:8000/", function() {
        this.waitForSelector(".navbar",
            function pass() {
                test.assertExists('.navbar', 'Navbar was found');
            },
            function fail() {
                test.fail("Did not load element .navbar");
            }
        );
    });

    casper.then(function(){
      this.waitForSelector(".lorem",
            function pass() {
                test.assertExists('.lorem', 'Lorem was found');
            },
            function fail() {
                test.fail("Did not load element .lorem");
            }
        );
    });

    casper.then(function(){
      this.waitForSelector("#devpage-link",
            function pass() {
                this.click('#devpage-link');
                test.assertEquals('http://localhost:8000/#/devpage',this.getCurrentUrl(), 'Devpage link opens a proper page');
            },
            function fail() {
                test.fail("Did not load element .lorem");
            }
        );
    });

    casper.run(function() {
        test.done();
    });
});

