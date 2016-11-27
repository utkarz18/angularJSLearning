(function(){
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems', FoundItems);


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.input = " ";
    menu.found = [];
    menu.flag = false;


    menu.getMatchedMenuItems = function(searchTerm){
      menu.found = [];
      if(searchTerm == null || searchTerm.trim() == ""){
        menu.flag = true;
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (foundItems){
        menu.found = foundItems;
        if(menu.found.length)
          menu.flag = false;
        else
          menu.flag = true;
      })
      .catch(function(error){
        console.log("Something went wrong!!");
      });
    }

    menu.removeItem = function(index){
      menu.found.splice(index, 1);
    }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method:"GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function(response){
        var items = response.data.menu_items;
        var foundItems = [];
        for(var i = 0; i < items.length; i++){
          if(items[i].description.search(searchTerm.toLowerCase()) != -1){
            foundItems.push(items[i]);
          }
        }
        return foundItems;
      })
      .catch(function(error){
        console.log("Something went wrong!!");
      });
    };
  }

  function FoundItems(){
    var ddo = {
      templateUrl : 'foundItems.html',
      scope : {
        founditems : '<',
        onRemove : '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController(){
    var menu = this;
  }
})();
