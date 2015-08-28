(function () {
  'use strict';

  var IndexCtrl = (function () {

    IndexCtrl.$inject = ['$mdSidenav', '$http', '$mdDialog'];

    function IndexCtrl($mdSidenav, $http, $mdDialog) {
      this.$mdDialog = $mdDialog;
      this.$mdSidenav = $mdSidenav;
      this.$http = $http;
      this.tutors = [];
      this.getTutors();
      this.alert = undefined;
    }

    IndexCtrl.prototype.login = function(){
      //Config alert
      this.alert = this.$mdDialog.alert()
        .title('Error...')
        .content('Login is not implemented :(')
        .ok('Close');

      this.$mdDialog
        .show( this.alert )
        .finally(function() {
          this.alert = undefined;
        });
    };

    IndexCtrl.prototype.getTutors = function(){
      var _this = this;
      this.$http.get("assets/data/tutors.json").then(function(res){
        _this.tutors = res.data;
        console.log(_this.tutors);
      })
    };

    IndexCtrl.prototype.toggleMenu = function(){
      this.$mdSidenav('left').toggle();
    };

    return IndexCtrl;
  })();

  angular.module('angularMaterialCodepot').controller('IndexCtrl',IndexCtrl);
})();
