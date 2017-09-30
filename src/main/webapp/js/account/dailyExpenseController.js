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
       // vm.getOne = getOne;
        vm.saveExpense = saveExpense;
        vm.editExpense = editExpense;
        vm.deleteExpense = deleteExpense;



        init();

        //GET ALL RECORDS
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

        // function getOne(id){
        //     console.log("get one function called" , id);
        //     var url = "/expense/getOne/" + id;
        //     var expensePromise = $http.get(url);
        //     expensePromise.then(function(response){
        //
        //         vm.expense = response.data;
        //         console.log("getone expense data" ,vm.expense);
        //     });
        // }


        // if ($state.current.name == "editexpense") {
        //
        //     var id = $stateParams.id;
        //
        //     getOne(id);
        // }

        //SAVING AND UPDATING
        function saveExpense() {
                // console.log("expense = ", expense);
            console.log("save function called");


            if(vm.expense.id != null) {

                var url = "/expense/update/" + vm.expense.id;

                var newdata = {

                    expensesType: vm.expense.expensesType,
                    description: vm.expense.description,
                    amount: vm.expense.amount

                };

                $http.post(url, newdata).then(function (response) {

                    console.log("successfully Updated");
                    vm.expenses = response.data;

                });

                vm.expense.expensesType = "";
                vm.expense.description = "";
                vm.expense.amount = "";


            }else {
                    console.log("Error Updating");
                }

                if(vm.expense.id == null) {


                    var url = "/expense/save";

                    var data = {

                        expensesType: vm.expense.expensesType,
                        description: vm.expense.description,
                        amount: vm.expense.amount

                    };

                    console.log("saving frontend data ", data);

                    $http.post(url, data).then(function (response) {

                        console.log("successfully Saved");
                        vm.expenses = response.data;

                    });

                    vm.expense.expensesType = "";
                    vm.expense.description = "";
                    vm.expense.amount = "";


                } else{
                console.log("Saving error");

                }

        }

        //JUST TO PASS THE DATA TO THE FORM
        function editExpense(expense){
            vm.expense = expense;
        }





        function deleteExpense(id){
            var url = "/expense/delete/" + id;
            $http.post(url).then(function(response){
                vm.expenses = response.data;
            });

        }



    }
    
})();


