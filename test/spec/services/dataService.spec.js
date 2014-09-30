describe('Service: dataService', function () {


    // load the controller's module
    beforeEach(module('codechallengeApp'));

    var service;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_dataService_) {
        service = _dataService_;
    }));

    it('returns all data', function () {
        expect(service.allData).toBeDefined();
    });

});
