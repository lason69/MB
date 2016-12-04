(function () {
    "use strict";

    angular.module('app')
        .factory('movieDetailService', ['$http', movieDetailService]); 
           
    function movieDetailService($http) {
       
     
        return {
            Movie: getMovie,
            Cast: getAllCast
        }

        function getMovie(MovieID) {
      
            return $http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                console.log(data)
                return data.data
            }, function () {

            })
        }
        function getAllCast(MovieID) {

        return $http.get('https://api.themoviedb.org/3/movie/' + MovieID + '/credits?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data;
            }, function () {

            })

        }
    
    };
})()