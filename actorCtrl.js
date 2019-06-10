app.controller("actorCtrl", function ($scope) {

    //**** Business Logic - this will eventually move to service ****
    function Actor(fname, lname, image, birthday, imdb) {
        this.fname = fname;
        this.lname = lname;
        this.image = image;
        this.birthday = birthday;
        this.imdb = imdb;
    }
    Actor.prototype.fullName = function ($scope) {
        var fullName = this.fname+" "+this.lname;
        return fullName;
    };
   
    // Load 6 actors
    $scope.actors = [];
    $scope.actors.push(new Actor("Bruce", "Willis", "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg", "1955-03-19", "https://www.imdb.com/name/nm0000246"));
    $scope.actors.push(new Actor("Sharon", "Stone", "https://m.media-amazon.com/images/M/MV5BMTg0MDU1ODQwNF5BMl5BanBnXkFtZTcwOTc3MjQwNA@@._V1_UY317_CR4,0,214,317_AL_.jpg", "1958-03-10", "https://www.imdb.com/name/nm0000232"));
    $scope.actors.push(new Actor("Michael", "Douglas", "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg", "1944-09-25", "https://www.imdb.com/name/nm0000140"));
    $scope.actors.push(new Actor("Ashton", "Kutcher", "https://m.media-amazon.com/images/M/MV5BMzIzMTE4NzcyMl5BMl5BanBnXkFtZTgwODA2NTQyNTM@._V1_UY317_CR131,0,214,317_AL_.jpg", "1978-02-07", "https://www.imdb.com/name/nm0005110"));
    $scope.actors.push(new Actor("Jennifer", "Aniston", "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg", "1969-02-11", "https://www.imdb.com/name/nm0000098"));
    $scope.actors.push(new Actor("Scarlett", "Johansson", "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg", "1984-11-22", "https://www.imdb.com/name/nm0424060"));
    console.log($scope.actors);


    //**** Presentation Logic ****/
    $scope.addActor = function () {
        var actor = new Actor("Bruce", "Willis", "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg", "1965-10-25", "https://www.imdb.com/name/nm0000246");
        $scope.actor.push(actor);
    }


});