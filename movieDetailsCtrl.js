app.controller("movieDetailsCtrl", function($scope, $log, movieSrv, $routeParams) {
  
    // Calling the service to get the car with the index
    // Notice how we are accessing $routeParams.id to get the dynamic part in the URL
    movieSrv.getMovieByIndex($routeParams.id).then(function(movie) {
      $scope.movie = movie;
    }, function(err) {
      $log.error(err);
    });
    
  });
  