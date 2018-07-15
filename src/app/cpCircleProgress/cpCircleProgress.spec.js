describe('cpCircleProgress component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('cpCircleProgress', function () {
      return {
        templateUrl: 'app/cpCircleProgress.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<cpCircleProgress></cpCircleProgress>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
