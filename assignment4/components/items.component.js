(function(){
  'use strict';
  angular.module('data')
  .component('menuItems', {
    templateUrl: '/templates/itemsComponent.html',
    bindings: {
      items: '<'
    }
  });
})();
