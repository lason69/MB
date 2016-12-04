(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main',['$location', MainController]);

    function MainController($location) {
        var vm = this;
        vm.movieID = 279;


        vm.go = function () {
            console.log("jestem");
            $location.path("/app/movieDetail/"+vm.movieID);
        };



    }

})();