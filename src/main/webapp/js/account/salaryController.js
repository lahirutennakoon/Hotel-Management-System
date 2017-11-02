(function() {
    'use strict';

    angular
        .module('app')
        .controller('salaryController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("salary controller");

        var vm = this;

        vm.salarys = [];


        vm.getAll = getAll;
        // vm.getOne = getOne;
        vm.saveSalary = saveSalary;
        vm.editSalary = editSalary;
        vm.deleteSalary = deleteSalary;



        init();

        //GET ALL RECORDS
        function init(){
            getAll();
        }

        function getAll(){
            console.log("getall function called");
            var url = "/salary/all";
            var salaryPromise = $http.get(url);
            salaryPromise.then(function(response){
                vm.salarys = response.data;
                console.log("Successfully got salary data", vm.salarys);
            });
        }

        // function getOne(id){
        //     console.log("get one function called" , id);
        //     var url = "/salary/getOne/" + id;
        //     var salaryPromise = $http.get(url);
        //     salaryPromise.then(function(response){
        //
        //         vm.salary = response.data;
        //         console.log("getone salary data" ,vm.salary);
        //     });
        // }


        // if ($state.current.name == "editsalary") {
        //
        //     var id = $stateParams.id;
        //
        //     getOne(id);
        // }

        //SAVING AND UPDATING
        function saveSalary() {
            // console.log("salary = ", salary);
            console.log("save function called");


            if(vm.salary.id != null) {

                var url = "/salary/update/" + vm.salary.id;

                var newdata = {

                    empID: vm.salary.empID,
                    empName: vm.salary.empName,
                    empDep: vm.salary.empDep,
                    empHrs: vm.salary.empHrs,
                    empOT: vm.salary.empOT,
                    empHrlyRate: vm.salary.empHrlyRate,
                    empTax: vm.salary.empTax,
                    payDate: vm.salary.payDate,
                    grossPay: vm.salary.grossPay,
                    netPay: vm.salary.netPay

                };

                $http.post(url, newdata).then(function (response) {

                    console.log("successfully Updated");
                    vm.salarys = response.data;

                });


                vm.salary.empID = "";
                vm.salary.empName= "";
                vm.salary.empDep= "";
                vm.salary.empHrs = "";
                vm.salary.empOT = "";
                vm.salary.empHrlyRate = "";
                vm.salary.empTax = "";
                vm.salary.payDate = "";
                vm.salary.grossPay = "";
                vm.salary.netPay = "";

            }else {
                console.log("Error Updating");
            }

            if(vm.salary.id == null) {


                var url = "/salary/save";

                var data = {

                    empID: vm.salary.empID,
                    empName: vm.salary.empName,
                    empDep: vm.salary.empDep,
                    empHrs: vm.salary.empHrs,
                    empOT: vm.salary.empOT,
                    empHrlyRate: vm.salary.empHrlyRate,
                    empTax: vm.salary.empTax,
                    payDate: vm.salary.payDate,
                    grossPay: vm.salary.grossPay,
                    netPay: vm.salary.netPay

                };

                console.log("saving frontend data ", data);

                $http.post(url, data).then(function (response) {

                    console.log("successfully Saved");
                    vm.salarys = response.data;

                });

                vm.salary.empID = "";
                vm.salary.empName= "";
                vm.salary.empDep= "";
                vm.salary.empHrs = "";
                vm.salary.empOT = "";
                vm.salary.empHrlyRate = "";
                vm.salary.empTax = "";
                vm.salary.payDate = "";
                vm.salary.grossPay = "";
                vm.salary.netPay = "";



            } else{
                console.log("Saving error");

            }

        }

        //JUST TO PASS THE DATA TO THE FORM
        function editSalary(salary){
            vm.salary = salary;
        }





        function deleteSalary(id){
            var url = "/salary/delete/" + id;
            $http.post(url).then(function(response){
                vm.salarys = response.data;
            });

        }



    }

})();


