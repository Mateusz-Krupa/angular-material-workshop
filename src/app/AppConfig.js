(function() {
  'use strict';

  angular
    .module('angularMaterialCodepot')
    .config(config)
    .config(function($mdThemingProvider) {

//Palette Options
      //red
      //pink
      //purple
      //deep-purple
      //indigo
      //blue
      //light-blue
      //cyan
      //teal
      //green
      //light-green
      //lime
      //yellow
      //amber
      //orange
      //deep-orange
      //brown
      //grey
      //blue-grey

      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');

      $mdThemingProvider.theme('secondTheme')
        .primaryPalette('yellow')
        .dark();
    });

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }


})();
