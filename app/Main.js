(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', MainController);

    function MainController() {
        var vm = this;
        vm.food = 'pizza';
    }

})();