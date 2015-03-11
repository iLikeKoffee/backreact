var allTestFiles = [];
var TEST_REGEXP = /\.test\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    app: './app/scripts',
    controllers: './app/scripts/controllers/dest',
    ui: './app/scripts/ui-components/dest',
    underscore: './app/bower_components/underscore/underscore',
    backbone: './app/bower_components/backbone/backbone',
    jquery: './app/bower_components/jquery/dist/jquery.min',
    react: './app/bower_components/react/react-with-addons'
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
