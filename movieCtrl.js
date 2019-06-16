app.controller("movieCtrl", function ($scope,$http) {

    //**** Business Logic - this will eventually move to service ****
    function Movie (name, releaseDate, length, poster, stars) {
        this.name = name;
        this.release = releaseDate;
        this.length = length;
        this.poster = poster;
        this.stars = stars;
    };
    
    // Load  movies
    // $scope.movies = [];
    // $scope.movies.push(new Movie("Die Hard", "1988-07-20", "132 minutes", "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"]));
    // $scope.movies.push(new Movie("Basic Instinct", "1992-03-20", "127 minutes", "https://m.media-amazon.com/images/M/MV5BZjk0YmJkNjItNDY3Mi00ZWFiLWEwY2EtMDJlZWJlOWZkNzJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Michael Douglas", "Sharon Stone", "George Dzundza"]));
    // $scope.movies.push(new Movie("Wall Street", "1987-12-11", "126 minutes", "https://m.media-amazon.com/images/M/MV5BNmEyZGQ4NDQtNTEzZC00MDczLWE4ZTEtYTg0ODg2NTkyMWM3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Charlie Sheen", "Michael Douglas", "Tamara Tunie"]));
    // $scope.movies.push(new Movie("Just Married", "2003-01-10", "95 minutes", "https://m.media-amazon.com/images/M/MV5BMTk1MzM4NzUzNl5BMl5BanBnXkFtZTcwMDQyMDczMw@@._V1_UY268_CR0,0,182,268_AL_.jpg", ["Ashton Kutcher", "Brittany Murphy", "Christian Kane"]));
    // $scope.movies.push(new Movie("Cake", "2015-01-23", "102 minutes", "https://m.media-amazon.com/images/M/MV5BMmE2ZTQ5NTUtMzM2NS00YTIxLWEyMDQtMjBiMGNmODgwN2U5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Jennifer Aniston", "Adriana Barraza", "Anna Kendrick"]));
    // $scope.movies.push(new Movie("Lost In Translation", "2003-10-03", "102 minutes", "https://m.media-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_UX182_CR0,0,182,268_AL_.jpg", ["Bill Murray", "Scarlett Johansson", "Giovanni Ribisi"]));
    // console.log($scope.movies);


    $scope.movies = [];
    $http.get("movies.json").then(function(res) {
    // on success
    
    for (var i = 0; i < res.data.length; i++) {
      var movie = new Movie(res.data[i].name, res.data[i].release, 
        res.data[i].length, res.data[i].poster, res.data[i].stars);
      $scope.movies.push(movie);
      }
  }, function(err) {
    console.error(err);

  })

   
});
