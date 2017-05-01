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
    for (var key in packageInfo[i]) {
      if ($stateParams.id == packageInfo[i][key]) {
        $scope.background = {
          "background-image": "url(" + packageInfo[i].image +")",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        };
        $scope.city = packageInfo[i].city;
      }
    }
  }


})