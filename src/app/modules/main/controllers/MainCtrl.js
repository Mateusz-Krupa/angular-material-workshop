(function () {
  'use strict';

  var MainCtrl = (function () {

    MainCtrl.$inject = ['$mdDialog'];
    function MainCtrl($mdDialog) {
      this.$mdDialog = $mdDialog;
    }

    MainCtrl.prototype.openRegistration = function(ev){

      this.$mdDialog.show({
        controller: 'DialogueCtrl',
        controllerAs: 'dialog',
        templateUrl: 'app/modules/main/templates/form.html',
        parent: angular.element(document.body),
        targetEvent: ev
      }).then(function(answer) {

      }, function() {

      });
    };

    return MainCtrl;
  })();
  angular.module('angularMaterialCodepot').controller('MainCtrl',MainCtrl);
})();
