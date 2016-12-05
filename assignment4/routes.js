(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/homeTemplate.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categoriesTemplate.html',
        controller: 'CategoryListController as catg',
        resolve: {
          categoryList: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items',
        templateUrl: 'templates/itemsTemplate.html'
      })
  }
})();
