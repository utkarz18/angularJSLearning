(function (){
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuyList;

    toBuy.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.items = ShoppingListCheckOffService.boughtList;
  };

  function ShoppingListCheckOffService(){
    var service = this;

    // to buy items array
    service.toBuyList = [
      {
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Coldrinks",
        quantity: 5
      },
      {
        name: "Chips",
        quantity: 8
      },
      {
        name: "Ice Creams",
        quantity: 6
      },
      {
        name: "Pepto Bismol",
        quantity: 2
      }
    ];

    // already bought array
    service.boughtList = [];

    service.buyItem = function(index){
      service.boughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index, 1);
    };
  };
})();
