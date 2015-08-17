(function () {
  'use strict';

  var DialogueController = (function () {

    DialogueController.$inject = ['$mdDialog', '$scope'];
    function DialogueController($mdDialog, $scope) {
      this.$mdDialog = $mdDialog;
      this.$scope = $scope;
    }

    DialogueController.prototype.submit = function(ev){
      this.$mdDialog.hide();
    };

    DialogueController.prototype.cancel = function(ev){
      this.$mdDialog.hide();
    };

    DialogueController.prototype.close = function(ev){
      this.$mdDialog.hide();
    };

    return DialogueController;
  })();
  angular.module('angularMaterialCodepot').controller('DialogueController',DialogueController);
})();
