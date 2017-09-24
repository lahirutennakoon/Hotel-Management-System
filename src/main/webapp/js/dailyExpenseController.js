(function() {
'use strict';

    angular
    .module('app')
    .controller('expenseController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("expense controller");

        var vm = this;



        vm.expenses = [];
        vm.getAll = getAll;
        vm.deleteExpense = deleteExpense;
        vm.saveExpense = saveExpense;






        init();

        function init(){
            getAll();
        }

        function getAll(){
        	console.log("getall function called");
            var url = "/expense/all";
            var expensePromise = $http.get(url);
            expensePromise.then(function(response){
                vm.expenses = response.data;
                console.log("Successfully got expense data", vm.expenses);
            });
        }

        function saveExpense(){
            console.log("save function called");

            var url = "/expense/save";

            var data = {

                expensesType: vm.expensesType,
                description: vm.description,
                amount     : vm.amount

            };

            console.log("saving frontend data " , data);

            $http.post(url,data).then(function(response){

                console.log("successfully Saved");
                vm.expenses = response.data;

            });

        }

        // function getAffordable(){
        //     var url = "/bookings/affordable/" + 100;
        //     var bookingsPromise = $http.get(url);
        //     bookingsPromise.then(function(response){
        //         vm.bookings = response.data;
        //     });
        // }

        function deleteExpense(id){
            var url = "/expense/delete/" + id;
            $http.post(url).then(function(response){
                vm.expenses = response.data;
            });

        }


// 	$scope.submitexpenses = function(){
// 		var url = $location.absUrl() + "postexpense";
//
// 		var config = {
//                 headers : {
//                     'Content-Type': 'application/json;charset=utf-8;'
//                 }
//         }
//
// 		var data = {
// 			expensesType: $scope.expensesType,
//             description: $scope.description,
//             amount     : $scope.amount
//         };
//
//
// 		$http.post(url, data, config).then(function (response) {
// 			$scope.postResultMessage = "Sucessful!";
// 		}, function (response) {
// 			$scope.postResultMessage = "Fail!";
// 		});
//
// 		$scope.expensesType = "";
// 		$scope.description = "";
// 		$scope.amount = "";
// 	}
//
// 	//Getting All expenses
// 	$scope.showAllExpenses = false;
//
// 	$scope.getAllExpenses = function() {
//
// 		console.log("getallexpenses");
// 		var url = $location.absUrl() + "findallexpenses";
//
// 		var config = {
// 			headers : {
// 				'Content-Type' : 'application/json;charset=utf-8;'
// 			}
// 		}
//
// 		$http.get(url, config).then(function(response) {
//
// 			if (response.data.status == "Done") {
//
// 				$scope.allexpenses = response.data;
// 				$scope.showAllExpenses = true;
// 				console.log(allexpenses);
//
// 			} else {
// 				$scope.getResultMessage = "get All Expenses Data Error!";
// 			}
//
// 		}, function(response) {
// 			$scope.getResultMessage = "Fail!";
// 		});
//
// 	}
//
// //	$scope.deleteExpense = function($index){
// //		$scope.allexpenses.data.splice($index , 1);
// //	}
//
// 	$scope.deleteExpense = function(id) {
//
// 		var url = $location.absUrl() + "delexpenses" + id;
//
// 		console.log("id =" , url);
//
// 		var config = {
// 			headers : {
// 				'Content-Type' : 'application/json;charset=utf-8;'
// 			}
// 		}
//
// 		$http.post(url, config).then(function(response) {
// 			if (response.data.status == "deleted") {
// 				$scope.getResultMessage = "Successfully deleted";
//
// 			} else {
// 				$scope.getResultMessage = "Delete Error!";
// 			}
//
//
// 		}, function(response) {
// 			$scope.getResultMessage = "Fail!";
// 		});
//
//  	}
    }
    
})();


