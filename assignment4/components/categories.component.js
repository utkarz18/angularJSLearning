  (function(){
    'use strict';
    angular.module('data')
    .component('categories', {
      templateUrl: './templates/categoriesComponent.html',
      bindings: {
        categoryList: '<'
      }
    });
  })();
