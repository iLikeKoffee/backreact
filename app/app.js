requirejs.config({
  baseUrl: 'bower_components',
  paths: {
    app: '../app',
    controllers: '../app/scripts/controllers/dest',
    ui: '../app/scripts/ui-components/dest',
    underscore: '../app/bower_components/underscore/underscore',
    backbone: '../app/bower_components/backbone/backbone',
    jquery: '../app/bower_components/jquery/dist/jquery.min',
    react: '../app/bower_components/react/react'
  }
});

requirejs(['app/router', 'backbone'], function(router, Backbone){

  router.navigate('');
  Backbone.history.start();
});
