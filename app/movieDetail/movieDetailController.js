(function () {
    "use strict";

    angular
        .module('app')
        .controller('movieDetailController', [ '$http', '$q', '$routeParams', 'movieDetailService', movieDetailController])



    function movieDetailController($http, $q, $routeParams, movieDetailService) {
        var vm = this;

        this.params = $routeParams;
        vm.movieID = this.params.movieID;

        fillMovie();
        fillCast();
        vm.collapsed = false;

        vm.checkCollapsed = function () {
            console.log(vm.collapsed)
            if (vm.collapsed) {
                vm.collapsed = false;

            }


            vm.collapsed = true;

        }
        function fillMovie() {
            movieDetailService.Movie(vm.movieID).then(function (model) {
                vm.Movie = model;
            })
    
        }
        function fillCast() {
            //$scope.Cast = movieDetailService.getAllCast.cast;
            //console.log($scope.Cast);
            movieDetailService.Cast(vm.movieID).then(function (model) {
                vm.Cast = model.cast;
                vm.Crew = model.crew;
                vm.topCast = vm.Cast.slice(0, 6);
                vm.RestCast = vm.Cast.slice(6, vm.Cast.length - 1)
               
            })
        }
        function collapseIcon() {
            return (vm.collapsed) ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }
 

})();
