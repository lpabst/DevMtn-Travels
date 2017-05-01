angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainSrv){

// var countryId = $stateParams.id;

// $scope.findCountryById = function(){
//     for (var i = 0; i < mainSrv.packageInfo.length; i ++){
//         if (mainSrv.packageInfo[i].id == countryId){
//             $scope.currentPackage = mainSrv.packageInfo[i];
//         }
//     }
// }

// $scope.findCountryById();

var packageInfo = mainSrv.packageInfo;
    
    for (var i = 0; i < packageInfo.length; i++) {
    
      if ($stateParams.id == packageInfo[i].id) {
        $scope.background = {
          "background": "url(" + packageInfo[i].image +") no-repeat center",
          "background-size": "cover",
        };
        $scope.city = packageInfo[i].city;
      }
    
    }


})