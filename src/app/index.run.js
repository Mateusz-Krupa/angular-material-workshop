(function() {
  'use strict';

  angular
    .module('angularMaterialCodepot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
