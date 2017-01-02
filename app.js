(function(){
	angular.module('dthModule', [])
	.constant('ApiPath', 'https://ws.rocketinpocket.com/recharge/v1/recharge/dth?')
	.service('DthService', DthService)
	.controller('DthController', DthController);
	
	DthController.$inject = ['DthService'];
	function DthController(DthService){
		var dth = this;
		dth.client_id = "10356";
		dth.client_key = "e1k97j1plhgdrqc0b8olannbxnnilcnf";
		dth.custid = "";
		dth.opCode = "";
		dth.amount = "";
		dth.live = true;
		dth.message = "";
		
		dth.fillCharge = function(){
			console.log(dth.client_id, dth.client_key, dth.custid, dth.opCode, dth.amount, dth.live);
			var promise = DthService.fillCharge(dth.client_id, dth.client_key, dth.custid, dth.opCode, dth.amount, dth.live);
			promise.then(function(response){
				console.log(response)
				if(response == "Error")
					dth.message = "Error";
			})
		};
	}
	
	DthService.$inject = ['$http', 'ApiPath'];
	function DthService($http, ApiPath){
		var service = this;
		service.fillCharge = function(client_id, client_key, custid, opCode, amount, live){
			return $http.get(ApiPath + 'client_id=' + client_id + '&client_key=' + client_key + '&custid=' + custid 
							 + '&operator_code=' + opCode + '&amount=' + amount + '&live=' + live)
			.then(function (response) {
				return response.data;
			})
			.catch(function(error){
				return "Error";
			});
		}
	}
})();
