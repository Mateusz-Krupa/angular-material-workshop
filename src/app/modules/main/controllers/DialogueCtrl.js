(function () {
  'use strict';

  var DialogueCtrl = (function () {

    DialogueCtrl.$inject = ['$mdDialog', '$scope'];
    function DialogueCtrl($mdDialog, $scope) {
      this.$mdDialog = $mdDialog;
      this.$scope = $scope;
    }

    DialogueCtrl.prototype.submit = function(ev){
      this.$mdDialog.hide();
    };

    DialogueCtrl.prototype.cancel = function(ev){
      this.$mdDialog.cancel();
    };

    DialogueCtrl.prototype.close = function(ev){
      this.$mdDialog.hide();
    };

    return DialogueCtrl;
  })();
  angular.module('angularMaterialCodepot').controller('DialogueCtrl',DialogueCtrl);
})();
