app.factory("movieSrv", function($log,$http,$q,convert) {
  
    function Movie (data/*name, releaseDate, length, poster, stars*/) {
        this.name = data.name;
        this.release = data.release;
        this.length = data.length;
        this.poster = data.poster;
        this.stars = data.stars;
    };
    Movie.prototype.convertToMinutes=function(){
      return convert.convertMinToHrs(this.length);
    }
    
    var movies = [];
    function getMovies() {
        var async = $q.defer();
   
        $http.get("movies.json").then(function(res) {
          // on success
          
          for (var i = 0; i < res.data.length; i++) {
            var movie = new Movie(res.data[i]);
            movies.push(movie);
          }
          // movies are ready - I can resolve the promise
        //   alert("hi")

          async.resolve(movies);
        }, function(err) {
          $log.error(err);
          async.reject(err);
        });
    
        return async.promise;
      }

      function getMovieByIndex(index) {
        var async = $q.defer();
    
        // Getting all the cars and returning a single car by its index in the array
        getMovies().then(function(movies) {
          if (index >= movies.length) {
            async.reject("Index out of bounds")
          }
          
          async.resolve(movies[index]);
        }, function(err) {
          async.reject(err);
        })
    
        return async.promise;
      }
      return {
        getMovies: getMovies,
        getMovieByIndex: getMovieByIndex
      }
    
      
    
  });