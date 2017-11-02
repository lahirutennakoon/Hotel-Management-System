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
        vm.resetFields = resetFields;
        vm.deleteExpense = deleteExpense;
        vm.saveExpense = saveExpense;
        vm.back = back;
        vm.exportExcel = exportExcel;

        init();

        function init(){
            getAll();
        }

        // //send date time json array value
        // var today = new Date();
        // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // var dt = new Date();
        // var h =  dt.getHours(), m = dt.getMinutes();
        // var thistime = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
        // var dateTime = date+' | '+thistime;
        //
        //
        //
        // vm.expenseDate = dateTime;

        //Pagination
        vm.currentPage = 1;
        vm.itemsPerPage = 5;


        function resetFields(){
            vm.expenseDate = "";
            vm.description = "";
            vm.expensesType = "";
            vm.amount = "";
            vm.paymentForm = "";
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


        //SAVING AND UPDATING
        function saveExpense() {
            // console.log("expense = ", expense);
            console.log("save function called");


            if(vm.id != null) {



                var url = "/expense/update/" + vm.id;

                var newdata = {

                    expenseDate: vm.expenseDate,
                    description: vm.description,
                    expensesType: vm.expensesType,
                    amount: vm.amount,
                    paymentForm: vm.paymentForm

                };

                $http.post(url, newdata).then(function (response) {

                    window.alert("Successfully Updated!");
                    vm.expenses = response.data;
                    resetFields();

                }, function (response) {

                    window.alert("Failed to update expense!");
                });



            }else {
                console.log("Error Updating");
            }

            if(vm.id == null) {


                var url = "/expense/save";

                var data = {

                    expenseDate: vm.expenseDate,
                    description: vm.description,
                    expensesType: vm.expensesType,
                    amount: vm.amount,
                    paymentForm: vm.paymentForm

                };

                console.log("saving frontend data ", data);

                $http.post(url, data).then(function (response) {

                    window.alert("Successfully Saved!");
                    vm.expenses = response.data;
                    vm.description = "";
                    vm.expensesType = "";
                    vm.amount = "";
                    vm.paymentForm = "";

                }, function (response)
                {
                    window.alert("Failed to save expense!");
                });




            }

        }
        // vm.expense = [];



        // JUST TO PASS THE DATA TO THE FORM
        vm.editExpense=function(id,date,desc,type,pay,amount){
            var datee = new Date(date);
            vm.id = id;

            vm.expenseDate = datee;


            vm.description = desc;
            vm.expensesType = type;
            vm.paymentForm = pay;
            vm.amount = parseInt(amount);


        };





        function deleteExpense(id){
            var url = "/expense/delete/" + id;
            $http.post(url).then(function(response){
                vm.expenses = response.data;
            });

        }

        function back(){

            resetFields();
            window.location.reload();

        }


        function exportExcel(expense) {


            var fileName = "Daily_Expense";
            var opts= [{ sheetid:'Expense', header:true }];
            alasql('SELECT * INTO XLSX("'+fileName +'.xlsx",?) FROM ?', [opts, [expense]]);

        }

        vm.today = function() {
            vm.expenseDate = new Date();
        };
        vm.today();

        vm.clear = function() {
            vm.expenseDate = null;
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


