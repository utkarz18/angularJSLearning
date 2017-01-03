(function(){
	angular.module('dthModule', [])
	.constant('ApiPath', 'https://ws.rocketinpocket.com/recharge/v1/recharge/dth?')
	.service('DthService', DthService)
	.controller('DthController', DthController);
	
	DthController.$inject = ['DthService'];
	function DthController(DthService){
		var dth = this;
		dth.client_id = "10356";
		dth.client_key = "zy0ckhworcr9yf52slj7vhjzb6qmbwlf";
		dth.msisdn = "";
		dth.opCode = "";
		dth.amount = "";
		dth.live = true;
		dth.message = "";
		
		dth.fillCharge = function(){
			var promise = DthService.fillCharge(dth.client_id, dth.client_key, dth.msisdn, dth.opCode, dth.amount, dth.live);
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
		service.fillCharge = function(client_id, client_key, msisdn, opCode, amount, live){
			var config = {
				 headers: {
					'Content-Type': 'application/json', 
					'Accept': 'application/json'
				}
			}
			return $http.post(ApiPath + 'client_id=' + client_id + '&client_key=' + client_key + '&msisdn=' + msisdn 
					                 + '&operator_code=' + opCode + '&amount=' + amount + '&live=' + live, config)
			.then(function (response) {
				return response.data;
			})
			.catch(function(error){
				return "Error";
			});
		}
	}
})();
