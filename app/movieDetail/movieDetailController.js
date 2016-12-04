(function () {
    "use strict";

    angular
        .module('app')
          .controller('movieDetailController', [ '$http', '$q', '$routeParams', 'movieDetailService', movieDetailController])



    function movieDetailController($http, $q, $routeParams, movieDetailService) {
        var vm = this;
        this.params = $routeParams;
        console.log(this.params.movieID)
        
        vm.movieID = this.params.movieID;
        fillMovie();
        fillCast();
        vm.collapsed = false;

        function fillMovie() {
           getMovie().then(function (model) {

               vm.Movie = model;

            })
        }
        function fillCast() {
            getAllCast().then(function (model) {

                vm.Cast = model.cast;
                vm.Crew = model.crew;
                console.log(model);
            })
        }
        vm.getCast = function () {
            return vm.Cast.slice(0, 6);
        }
        vm.getRestCast = function () {
            console.log(vm.collapsed);
            if (vm.collapsed) {
                vm.collapsed = false;
                return;
            }
            vm.RestCast = vm.Cast.slice(6, vm.Cast.length - 1)
            vm.collapsed = true;
            return vm.RestCast;
        }

        function getMovie() {

 

            return $http.get('https://api.themoviedb.org/3/movie/' + vm.movieID + '?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data
               


            }, function () {
               
            })
            
        }

        function getAllCast() {
            return $http.get('https://api.themoviedb.org/3/movie/' + vm.movieID + '/credits?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US')
            .then(function (data) {
                return data.data;


            }, function () {
              
            })
           
        }

        function collapseIcon() {
            return (vm.collapsed) ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
        }
    }
 

})();
