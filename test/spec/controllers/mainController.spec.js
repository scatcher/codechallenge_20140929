'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('codechallengeApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should have a home team', function () {
        expect(scope.teamsData.Home).toBeDefined();
    });
    it('should have an away team', function () {
        expect(scope.teamsData.Away).toBeDefined();
    });

});
