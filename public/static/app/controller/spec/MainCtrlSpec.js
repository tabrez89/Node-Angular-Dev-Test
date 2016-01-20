

describe('app', function () {
    var scope,
    controller;
    beforeEach(function () {
        module('app');
    });

    describe('MainCtrl', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('MainCtrl', {
                '$scope': scope
            });
        }));
        it('Initial tag Value', function () {
            expect(scope.inputModel.tagvalue).toBe('');
        });

        it('assigned tagvalue', function () {
            scope.inputModel.tagvalue = 'mumbai';
            scope.$digest();
            scope.searchonFlickr(true);
        });
    });
});