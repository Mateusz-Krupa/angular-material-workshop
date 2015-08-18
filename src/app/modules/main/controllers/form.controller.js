(function () {
  'use strict';

  var FormController = (function () {
    FormController.$inject = [];
    function FormController() {
      this.user = {
        title: 'Developer',
        email: 'someone@wp.pl',
        firstName: 'Andrzej',
        lastName: 'Grzegorczyk' ,
        company: ' x ' ,
        address: 'Rusinska 19' ,
        city: 'Warszawa' ,
        state: 'mazowieckie' ,
        postalCode : '94043'
      }

    }
    return FormController;
  })();
  angular.module('angularMaterialCodepot').controller('FormController',FormController);
})();
