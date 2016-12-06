(function(){
  'use strict';

  angular.module('data')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['menuItems'];
  function MenuItemsController(menuItems){
    var menu = this;
    menu.menuItems = menuItems;
  }

})();
