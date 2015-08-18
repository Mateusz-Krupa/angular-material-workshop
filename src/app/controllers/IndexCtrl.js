(function () {
  'use strict';


  var IndexCtrl = (function () {

    IndexCtrl.$inject = ['$mdSidenav']

    function IndexCtrl($mdSidenav) {
      this.$mdSidenav = $mdSidenav;
    }

    IndexCtrl.prototype.toggleMenu = function(){
      this.$mdSidenav('left').toggle();
    };

    return IndexCtrl;
  })();
  angular.module('angularMaterialCodepot').controller('IndexCtrl',IndexCtrl);
})();
