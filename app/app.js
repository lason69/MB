//import { movieDetailController } from './movieDetail/movieDetailController.js';
//import { runBlock } from './index.run.js';


//angular.module("app", [])
//.controller('movieDetailController', MovieDetailController)
//.run(runBlock);
(function () {
    'use strict';
    angular.module('app', ['ngRoute'])

    
    .config(['$routeProvider', '$locationProvider',
      function ($routeProvider, $locationProvider) {
          $routeProvider
             .when('/app/movieDetail/:movieID', {
                 templateUrl: 'app/movieDetail/movieDetail.html',
                 controller: 'movieDetailController',
                 controllerAs: 'movieDetailController'
             });

          $locationProvider.html5Mode(true);
      }]);
 
})();





