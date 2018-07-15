var appController = function () {
  var vm = this;
  vm.totalLoaded = 13;
};

appController.$inject = [];

angular.module('jmCircleProgressModule').controller('AppController', appController);
