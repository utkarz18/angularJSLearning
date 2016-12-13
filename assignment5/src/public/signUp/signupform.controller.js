(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpFormController', SignUpFormController);

  function SignUpFormController(){
    var reg = this;
    reg.firstname = "";
    reg.lastname = "";
    reg.email = "";
    reg.phone = "";
  }
})();
