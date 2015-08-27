(function () {
  'use strict';

  var IndexCtrl = (function () {

    //TODO inject for dependencies '$mdSidenav'
    IndexCtrl.$inject = ['$http'];

    function IndexCtrl($http) {
      this.$http = $http;
      this.tutors = [];
      this.getTutors();
    }

    IndexCtrl.prototype.getTutors = function(){
      var _this = this;
      this.$http.get("assets/data/tutors.json").then(function(res){
        _this.tutors = res.data;
      })
    };

    //TODO Add toggleMenu function :) try to use this.$mdSidenav('left')
    IndexCtrl.prototype.toggleMenu = function(){

    };

    return IndexCtrl;
  })();

  angular.module('angularMaterialCodepot').controller('IndexCtrl',IndexCtrl);
})();
