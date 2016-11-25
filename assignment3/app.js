(function(){
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService);

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    return $http({
      method:"GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    })
    .then(function(response){
      
    })
  }
})();
