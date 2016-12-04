(function () {
    "use strict";

    angular
        .module('app')
          .controller('movieDetailController', ['$scope', '$http', '$q', '$routeParams', 'movieDetailService', movieDetailController])



    function movieDetailController($scope, $http, $q, $routeParams, movieDetailService) {
    
        this.params = $routeParams;
        console.log(this.params.movieID)
        
        $scope.movieID = this.params.movieID;
        fillMovie();
        fillCast();
        $scope.collapsed = false;

        function fillMovie() {
            //movieDetailService.getMovie().then(function (model) {
            $scope.test = movieDetailService.Movie();
           // console.log($scope.test);
            
            //    $scope.Movie = model;

            //})
        }
        function fillCast() {
            //$scope.Cast = movieDetailService.getAllCast.cast;
            //console.log($scope.Cast);

            //    $scope.Cast = model.cast;
            //    $scope.Crew = model.crew;
            //    console.log(model);
            //})
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

      

        function collapseIcon() {
            return ($scope.collapsed) ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }
 

})();
