function cpCircleProgressController() {
  var ctrl = this;
  var strokeDashArray = 629;
  
  function calculate(){
    ctrl.strokeDashOffset = Math.round( (ctrl.percent * strokeDashArray) / 100);
  }

  ctrl.$onInit = function (){
    calculate();
  };

  ctrl.$onChanges = function(change){
    if(change.percent && (change.percent.currentValue > 100 || change.percent.currentValue == undefined)){
      ctrl.percent = 0;
    }
    calculate();
  }
}

angular
  .module('jmCircleProgressModule')
  .component('cpCircleProgress', {
    bindings: {
      description: '@',
      percent: '<'
    },
    templateUrl: 'app/cpCircleProgress/cpCircleProgress.html',
    controller: cpCircleProgressController,
    controllerAs: 'ctrl'
  });

