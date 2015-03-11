requirejs.config({
  baseUrl: './',
  paths: {
    'app': './scripts',
    'controllers': './scripts/controllers/dest',
    'ui': './scripts/ui-components/dest',
    'models': './scripts/models',
    'underscore': './bower_components/underscore/underscore',
    'backbone': './bower_components/backbone/backbone',
    'jquery': './bower_components/jquery/dist/jquery.min',
    'pickmeup': './bower_components/pickmeup/js/jquery.pickmeup.min',
    'dropzone': './bower_components/dropzone/dist/dropzone',
    'alertify': './bower_components/alertify.js/lib/alertify',
    'react': './bower_components/react/react',
    'react.backbone': './bower_components/react.backbone/react.backbone'
  }
});

requirejs(['app/router', 'backbone'], function(router, Backbone) {

  router.navigate('/');
  Backbone.history.start();
});
