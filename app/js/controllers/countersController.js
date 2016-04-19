countersApp.controller("countersCtrl", ["counterFactory", function(counterFactory){
  var self = this;

  self.counters = [];

  self.addCounter = function() {
    self.counters.push(new counterFactory());
  };
}]);
