  (function(){
    'use strict';
    angular.module('data')
    .component('categoriesComponent', {
      templateUrl: './templates/categoriesComponent.html',
      controller: CategoriesComponentController,
      bindings: {
        categoryList: '<'
      }
    });

    function CategoriesComponentController(){
      var catg = this;
    }
  })();
