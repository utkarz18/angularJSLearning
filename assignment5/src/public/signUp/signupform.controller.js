(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpFormController', SignUpFormController);

  SignUpFormController.$inject = ['MenuService'];
  function SignUpFormController(MenuService){
    var reg = this;

    reg.user = {};
    reg.user.firstname = "";
    reg.user.lastname = "";
    reg.user.email = "";
    reg.user.phone = "";
    reg.user.favdish = "";
    reg.user.dishName = "";
    reg.user.dishDescription = "";

    reg.flag = false;
    reg.btn_flag = true;
    reg.saveStatus = false;

    reg.checkMenuItem = function(short_name){
      if(short_name == null || short_name.length < 2)
        return;
      var promise = MenuService.getMenuItem(short_name.toUpperCase());
      promise.then(function(item){
        if(item == "Error"){
          reg.flag = true;
          reg.btn_flag = true;
        }
        else{
          reg.flag = false;
          reg.btn_flag = false;
          reg.user.dishName = item.name;
          reg.user.dishDescription = item.description;
        }
      });
    };

    reg.saveInfo = function(user){
      reg.saveStatus = MenuService.saveInfo(user);
    };
  }
})();
