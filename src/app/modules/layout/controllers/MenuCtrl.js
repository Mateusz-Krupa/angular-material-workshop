(function () {
  'use strict';

  var MainMenu = (function () {
    function MainMenu() {
      this.isOpen = false;
      this.selectedAlignment = 'md-left';
    }

    return MainMenu;
  })();
  angular.module('angularMaterialCodepot').controller('MainMenu',MainMenu);
})();
