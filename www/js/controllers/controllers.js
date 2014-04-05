angular.module('drinkalytics.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('StatsCtrl', ['$scope', '$stateParams', 'DrinkService', function($scope, $stateParams, DrinkService) {
  DrinkService.get(function (data) {
    $scope.everyone = data;
  });
}]);
