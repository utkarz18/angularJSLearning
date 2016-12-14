(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'ApiPath'];
  function MyInfoController(MenuService, ApiPath){
    var info = this;

    info.basePath = ApiPath;
    info.status = false;

    info.user = MenuService.getUser();
    if(info.user)
      info.status = true;
  };
})();
