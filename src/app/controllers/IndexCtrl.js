(function () {
  'use strict';

  var IndexCtrl = (function () {

    IndexCtrl.$inject = ['$mdSidenav', '$http'];

    function IndexCtrl($mdSidenav, $http) {
      this.$mdSidenav = $mdSidenav;
      this.$http = $http;
      this.tutors = [];
      this.getTutors();
    }

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
