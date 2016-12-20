(function () {
  'use strict';
  angular.module('LunchCheck',[]).
  controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchCheck = function(){
                          var lunchMenu = $scope.lunchMenu;
                          if(lunchMenu!=undefined && lunchMenu!=''){
                            if(countElement(lunchMenu)<=3)
                              $scope.message = 'Enjoy!';
                            else
                              $scope.message = 'Too much!';
                            $scope.color='green';
                          }else{
                            $scope.message = 'Please enter data first';
                            $scope.color='red';
                          }
                        };
  }
  function countElement(string){
    var count = 0;
    var list = string.split(',');
    for(var i=0;i<list.length;i++){
      if(list[i].trim()!='')
        count++;
    };
    return count;
  }
})();
