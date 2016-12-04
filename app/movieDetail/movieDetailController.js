(function () {
    "use strict";

    angular
        .module('app')
          .controller('movieDetailController', ['$scope', '$http', '$q', '$routeParams', movieDetailController])



    function movieDetailController($scope, $http, $q, $routeParams) {

                console.log("jestem")
     
        this.params = $routeParams;
        fillMovie();
        fillCast();
        $scope.collapsed = false;

        function fillMovie() {
            getMovie().then(function (model) {

                $scope.Movie = model;

            })
        }
        function fillCast() {
            getAllCast().then(function (model) {

                $scope.Cast = model.cast;
                $scope.Crew = model.crew;
                console.log(model);
            })
        }
        $scope.getCast = function () {
            return $scope.Cast.slice(0, 6);
        }
        $scope.getRestCast = function () {
            console.log($scope.collapsed);
            if ($scope.collapsed) {
                $scope.collapsed = false;
                return;
            }
            $scope.RestCast = $scope.Cast.slice(6, $scope.Cast.length - 1)
            $scope.collapsed = true;
            return $scope.RestCast;
        }

        function getMovie() {

            var deferred = $q.defer();

            return $http.get('https://api.themoviedb.org/3/movie/' + 278 + '?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data
                deferred.resolve(data.data);


            }, function () {
                deferred.reject('Error retriving Items');
            })
            return deferred.promise;
        }

        function getAllCast() {

            var deferred = $q.defer();

            $http.get('https://api.themoviedb.org/3/movie/' + 278 + '/credits?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                deferred.resolve(data.data);


            }, function () {
                deferred.reject('Error retriving Items');
            })
            return deferred.promise;
        }

        function collapseIcon() {
            return ($scope.collapsed) ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }
 

})();
