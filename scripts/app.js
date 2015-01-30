requirejs.config({
	baseUrl: 'bower_components',
	paths: {
		app: '../scripts',
		controllers: '../scripts/controllers/dest',
		underscore: '../scripts/bower_components/underscore/underscore',
    	backbone: '../scripts/bower_components/backbone/backbone',
    	jquery: '../scripts/bower_components/jquery/dist/jquery.min',
    	react: '../scripts/bower_components/react/react'
	}
});

requirejs(['app/router', 'backbone'], function(router, Backbone){
	
	router.navigate('');
	Backbone.history.start();
});