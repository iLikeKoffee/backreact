var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
        console.log(file);
    }
}
console.log("Test files loaded: "+tests.length+ ' Files')

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',

    paths: {
    	'EntityFactory' : 'scripts/common/libs/entity_factory/entity_factory'
    },

    shim: {
    },

    // ask Require.js to load these files (all our tests)
    deps: tests

    // start test run, once Require.js is done
});


require(tests, function(){
    window.__karma__.start();
});



