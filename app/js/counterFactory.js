countersApp.factory("counterFactory", function () {
  function Counter () {
    this.count = 0;
  }

  Counter.prototype.increment = function () {
    this.count ++;
  };

  Counter.prototype.decrement = function () {
    this.count --;
  };

  return Counter;
});
