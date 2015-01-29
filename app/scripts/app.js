'use strict';

/**
 * @ngdoc overview
 * @name realtorsApp
 * @description
 * # realtorsApp
 *
 * Main module of the application.
 */

angular
    .module('realtorsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                /* Works */
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
