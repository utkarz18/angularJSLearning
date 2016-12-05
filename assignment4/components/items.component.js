(function(){
  'use strict';
  angular.module('data')
  .component('itemsComponent', {
    templateUrl: '/templates/itemComponent.html',
    controller: ItemsComponentController,
    bindings: {
      items: '<'
    }
  });

  function ItemsComponentController(){
    var $ctrl = this;
  }
})();
