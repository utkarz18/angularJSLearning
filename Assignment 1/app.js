(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.msgColor = "";
    $scope.brdrColor = "";

    $scope.checkLunch = function(){
      if($scope.items == "" || $scope.items == " "){
        $scope.msgColor = $scope.brdrColor = "red";
        $scope.message = "Please enter data first";
        return;
      }
      var itemList = $scope.items.split(',');
      var count = 0;
      for(var i = 0; i < itemList.length; i++){
        if(itemList[i] != "" && itemList[i] != " ")
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
