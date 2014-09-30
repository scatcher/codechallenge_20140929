'use strict';

/**
 * @ngdoc function
 * @name codechallengeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codechallengeApp
 */
angular.module('codechallengeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
