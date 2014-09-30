'use strict';

/**
 * @ngdoc function
 * @name codechallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codechallengeApp
 */
angular.module('codechallengeApp')
  .controller('MainCtrl', function ($scope, $filter, dataService) {

    var state = {
        filterText: ''
      };

    var teamsData = {
      Home: dataService.getTeamData('home'),
      Away: dataService.getTeamData('away')
    };

    $scope.state = state;
    $scope.teamsData = teamsData;
  });
