(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope ) {
  $scope.themessage = "";
  $scope.item="";
  $scope.noOfItem="";

  $scope.calculateLength = function (string) {
  var x = string.length;
  return x;
};

 $scope.mySplit = function(string) {
     var array = string.split(',');
    return array.length;

}

  $scope.showmessage = function () {

    $scope.noOfItem = $scope.mySplit($scope.item);
    if ( $scope.item =="")
    {
      $scope.themessage = "Please enter data first";
    }
    else if (  $scope.noOfItem < 4)
    {
    $scope.themessage = "Enjoy!";
    }
    else  {
      $scope.themessage = "Too much!";
    }

  };

}
})();
