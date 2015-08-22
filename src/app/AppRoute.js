(function() {
  'use strict';
  angular
    .module('angularMaterialCodepot')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'view'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
