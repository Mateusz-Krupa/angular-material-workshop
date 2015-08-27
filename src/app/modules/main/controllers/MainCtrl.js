(function () {
  'use strict';

  var MainCtrl = (function () {

    //TODO include dependencies $mdDialog
    MainCtrl.$inject = [];
    function MainCtrl() {
    }

    MainCtrl.prototype.openRegistration = function(ev){
      //TODO open dialogue when user clicks on registration btn templateUrl: 'app/modules/main/templates/form.html'
    };

    return MainCtrl;
  })();
  angular.module('angularMaterialCodepot').controller('MainCtrl',MainCtrl);
})();
