(function () {
  'use strict';

  var FormCtrl = (function () {
    FormController.$inject = [];
    function FormController() {
      //TODO add some data for customer based on the form.html
      this.user = {
      };
    }
    return FormController;
  })();
  angular.module('angularMaterialCodepot').controller('FormCtrl',FormCtrl);
})();
