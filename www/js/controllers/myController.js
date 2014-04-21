'use strict';

angular.module('drinkalytics.controllers')
    .controller('MyController', ['$scope', '$firebase',
        function($scope, $firebase) {
            var baseURL = "https://scorching-fire-2151.firebaseio.com/users/"
            $scope.drink = {};
            $scope.users = $firebase(new Firebase(baseURL));

            $scope.keys = function(obj) {
                var k = []
                angular.forEach(obj, function(val, key) {
                    if (key[0] !== "$") {
                        k.push(key);
                    };
                })
                return k;
            }

            $scope.drinkSum = function(user) {
                var drinks = $scope.users[user];
                var count = 0;
                angular.forEach(drinks, function(props,id){
                	count += props["count"];
                })
                return count;
            }

            $scope.addDrink = function(count) {

                var drink = $scope.drink;
                drink.count = count;

                var user = $firebase(new Firebase(baseURL + drink.owner));

                user.$add($scope.drink);
            };
        }
    ])