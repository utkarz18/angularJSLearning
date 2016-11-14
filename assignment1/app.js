(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.msgColor = "";
    $scope.brdrColor = "black";

    $scope.checkLunch = function(){
      var itemList = $scope.items.split(',');
      var count = 0;
      for(var i = 0; i < itemList.length; i++){
        if(itemList[i].trim() != "")
          count += 1;
      }

      if(count == 0){
        $scope.msgColor = $scope.brdrColor = "red";
        $scope.message = "Please enter data first";
      }
      else if(count <= 3){
        $scope.msgColor = $scope.brdrColor = "green";
        $scope.message = "Enjoy!";
      }
      else{
        $scope.msgColor = $scope.brdrColor = "green";
        $scope.message = "Too much!";
      }
    };
  }

})();
