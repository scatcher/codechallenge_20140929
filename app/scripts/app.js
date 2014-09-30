'use strict';

/**
 * @ngdoc overview
 * @name codechallengeApp
 * @description
 * # codechallengeApp
 *
 * Main module of the application.
 */
angular
    .module('codechallengeApp', [
        'ngAnimate',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
