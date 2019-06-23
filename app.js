var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  
    $routeProvider.
      when("/", {
        templateUrl: "home.html",
        // controller: "homeCtrl"
      }).when("/actors", {
        templateUrl: "actors.html",
        controller: "actorCtrl"
      }).when("/movies", {
         templateUrl: "movies.html",
         controller: "movieCtrl"
        }).when("/movies/:id", {
          templateUrl: "movieDetails.html",
          controller: "movieDetailsCtrl"
      });
    
  })