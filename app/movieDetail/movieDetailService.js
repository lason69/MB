﻿(function () {
    "use strict";

    angular.module('app')
        .factory('movieDetailService', ['$http', function ($http) {
            return {
                getMovie: getMovie(),
                getAllCast: getAllCast()
                            
            }
        function getMovie() {
            return $http.get('https://api.themoviedb.org/3/movie/' + 278+ '?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data



            }, function () {

            })
        }
        function getAllCast() {
            return $http.get('https://api.themoviedb.org/3/movie/' + 278 + '/credits?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data;

            }, function () {

            })

        }
    }]);

})