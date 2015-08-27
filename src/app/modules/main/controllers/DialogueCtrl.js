(function () {
  'use strict';

  var DialogueCtrl = (function () {

    //TODO inject for dependencies '$mdDialog'
    DialogueCtrl.$inject = [''];
    function DialogueCtrl() {

    }

    //TODO create dialogue submit function for example hide the dialogue :) or something
    DialogueCtrl.prototype.submit = function(ev){

    };

    //TODO create cancel function for dialogue
    DialogueCtrl.prototype.cancel = function(ev){
    };

    //TODO create close function for dialogue
    DialogueCtrl.prototype.close = function(ev){

    };

    return DialogueCtrl;
  })();

  angular.module('angularMaterialCodepot').controller('DialogueCtrl',DialogueCtrl);
})();
