define(function(require) {
        'use strict';
        var Backbone = require('backbone');

        var AppRouter = Backbone.Router.extend({
            routes: {
                '':               'MainCtrl',
                'hello/:name(/)': 'HelloCtrl',
                '*actions':       'NotFoundCtrl'
            },

            MainCtrl:     require('controllers/main'),
            HelloCtrl:    require('controllers/hello'),
            NotFoundCtrl: require('controllers/notfound')
        });

        return new AppRouter ();
    });
