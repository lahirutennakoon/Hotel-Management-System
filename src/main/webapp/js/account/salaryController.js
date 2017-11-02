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
//Pagination
        vm.currentPage = 1;
        vm.itemsPerPage = 5;

        //SAVING AND UPDATING
        function saveSalary() {
            // console.log("salary = ", salary);
            console.log("save function called");


            //UPDATE
            if(vm.id != null) {

                var url = "/salary/update/" + vm.id;

                var newdata = {

                    empID: vm.empID,
                    empName: vm.empName,
                    empDep: vm.empDep,
                    empHrs: vm.empHrs,
                    empOT: vm.empOT,
                    empHrlyRate: vm.empHrlyRate,
                    empTax: vm.empTax,
                    payDate: vm.payDate,
                    grossPay: vm.empHrs * vm.empHrlyRate,
                    netPay: (vm.empHrs * vm.empHrlyRate)-vm.empTax

                };

                $http.post(url, newdata).then(function (response) {

                    console.log("successfully Updated");

                    vm.salarys = response.data;

                });


                vm.empID = "";
                vm.empName= "";
                vm.empDep= "";
                vm.empHrs = "";
                vm.empOT = "";
                vm.empHrlyRate = "";
                vm.empTax = "";
                vm.payDate = "";
                vm.grossPay = "";
                vm.netPay = "";

                window.alert("Successfully Updated!");
                window.location.reload();

            }else {
                console.log("Error Updating");
            }

            //SAVE
            if(vm.id == null) {


                var url = "/salary/save";

                var data = {

                    empID: vm.empID,
                    empName: vm.empName,
                    empDep: vm.empDep,
                    empHrs: vm.empHrs,
                    empOT: vm.empOT,
                    empHrlyRate: vm.empHrlyRate,
                    empTax: vm.empTax,
                    payDate: vm.payDate,
                    grossPay: vm.empHrs * vm.empHrlyRate,
                    netPay: (vm.empHrs * vm.empHrlyRate)-vm.empTax

                };

                console.log("saving frontend data ", data);

                $http.post(url, data).then(function (response) {

                    console.log("successfully Saved");
                    window.alert("Successfully Saved");
                    vm.salarys = response.data;

                });

                vm.empID = "";
                vm.empName= "";
                vm.empDep= "";
                vm.empHrs = "";
                vm.empOT = "";
                vm.empHrlyRate = "";
                vm.empTax = "";
                vm.payDate = "";
                vm.grossPay = "";
                vm.netPay = "";



            } else{
                console.log("Saving error");


            }

        }

        //JUST TO PASS THE DATA TO THE FORM
        function editSalary(id,empID,name,dep,hrs,ot,rate,tax,date,gross,net){

            var datee = new Date(date);
            vm.id = id;
            vm.empID = empID;
            vm.empName= name;
            vm.empDep= dep;
            vm.empHrs = parseInt(hrs);
            vm.empOT =parseInt(ot);
            vm.empHrlyRate = parseInt(rate);
            vm.empTax = parseInt(tax);
            vm.payDate = datee;
            vm.grossPay =parseInt(gross);
            vm.netPay = parseInt(net);



            // vm.salary = salary;
        }





        function deleteSalary(id){
            var url = "/salary/delete/" + id;
            $http.post(url).then(function(response){
                vm.salarys = response.data;
            });

            vm.empID = "";
            vm.empName= "";
            vm.empDep= "";
            vm.empHrs = "";
            vm.empOT = "";
            vm.empHrlyRate = "";
            vm.empTax = "";
            vm.payDate = "";
            vm.grossPay = "";
            vm.netPay = "";


        }


        vm.today = function() {
            vm.payDate = new Date();
        };
        vm.today();

        vm.clear = function() {
            vm.payDate = null;
        };

        vm.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        vm.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        vm.toggleMin = function() {
            vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
            vm.dateOptions.minDate = vm.inlineOptions.minDate;
        };

        vm.toggleMin();

        vm.open1 = function() {
            vm.popup1.opened = true;
        };

        vm.open2 = function() {
            vm.popup2.opened = true;
        };

        vm.setDate = function(year, month, day) {
            vm.incomeDate = new Date(year, month, day);
        };

        vm.formats = ['yyyy-MM-dd'];
        vm.format = vm.formats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.popup1 = {
            opened: false
        };

        vm.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        vm.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < vm.events.length; i++) {
                    var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return vm.events[i].status;
                    }
                }
            }

            return '';
        }



    }

})();


