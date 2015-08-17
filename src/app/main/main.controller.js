(function () {
  'use strict';

  var MainController = (function () {

    MainController.$inject = ['$mdDialog'];
    function MainController($mdDialog) {
      this.$mdDialog = $mdDialog;
    }

    MainController.prototype.openRegistration = function(ev){

      this.$mdDialog.show({
        controller: 'DialogueController',
        controllerAs: 'dialog',
        templateUrl: 'app/main/templates/form.html',
        parent: angular.element(document.body),
        targetEvent: ev
      }).then(function(answer) {

      }, function() {

      });
    };

    return MainController;
  })();
  angular.module('angularMaterialCodepot').controller('MainController',MainController);
})();
