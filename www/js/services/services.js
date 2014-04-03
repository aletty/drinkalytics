angular.module('drinkalytics.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

.factory('DrinkService', ['$http', function($http) {
  var all = [];

  function __pull(callback) {
    $http.get("data/data.json").success(function (data) {
      all = data.sort(function (d1, d2) { return d2['count'] - d1['count']; });
      for (var i; i < all.length; i++) {
        all[i]['rank'] = i+1
      }
      callback && callback(all)
    })
  }

  return {
    get: function(callback) {
      if (!all.length) {
        callback && __pull(callback)
      } else {
        callback && callback(all)
      }
    }
  }
}]);
