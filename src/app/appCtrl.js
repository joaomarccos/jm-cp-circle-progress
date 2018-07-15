var appCtrl = function($scope) {
    $scope.totalLoaded = 13;
}

appCtrl.$inject = ['$scope'];
angular.module('jmCircleProgressModule').controller('appCtrl', appCtrl);