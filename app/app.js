requirejs.config({
  baseUrl: './',
  paths: {
    app: './scripts/',
    controllers: './scripts/controllers/dest',
    ui: './scripts/ui-components/dest',
    underscore: './bower_components/underscore/underscore',
    backbone: './bower_components/backbone/backbone',
    jquery: './bower_components/jquery/dist/jquery.min',
    react: './bower_components/react/react'
  }
});

requirejs(['app/router', 'backbone'], function(router, Backbone){

  router.navigate('');
  Backbone.history.start();
});
