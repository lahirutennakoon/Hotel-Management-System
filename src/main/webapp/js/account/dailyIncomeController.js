(function() {
'use strict';

    angular
    .module('app')
    .controller('incomeController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("income controller");



        var vm = this;

        vm.incomes = [];

        vm.getAll = getAll;
        vm.resetFields = resetFields;
        vm.deleteIncome = deleteIncome;
        vm.saveIncome = saveIncome;
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
        // var incomeDate = new Date();
        // var h =  incomeDate.getHours(), m = incomeDate.getMinutes();
        // var thistime = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
        // var dateTime = date+' | '+thistime;
        //
        //
        //
        // vm.expenseDate = dateTime;

        // vm.dateFormat = "dd/MM/yyyy";
        // vm.fromDatePickerOptions = {
        //     dateDisabled: false,
        //     formatYear: 'yy',
        //     //maxDate: new Date(2020, 5, 22),
        //     startingDay: 1
        // };

        //Pagination
        vm.currentPage = 1;
        vm.itemsPerPage = 5;


      //  vm.incomeDate = new Date();

       function resetFields(){
            vm.refNo = "";
            vm.incomeDate = "";
            vm.descc = "";
            vm.incomeType = "";
            vm.ipaymentForm = "";
           vm.iamount = "";
        }


        function getAll(){
        	console.log("getall function called");
            var url = "/income/all";
            var expensePromise = $http.get(url);
            expensePromise.then(function(response){
                vm.incomes = response.data;
                console.log("Successfully got income data", vm.incomes);
            });
        }


        //SAVING AND UPDATING
        function saveIncome() {
                // console.log("income = ", income);
            console.log("save function called");


            if(vm.id != null) {



                var url = "/income/update/" + vm.id;

                var newdata = {

                    refNo: vm.refNo,
                    incomeDate: vm.incomeDate,
                    descc: vm.descc,
                    incomeType: vm.incomeType,
                    ipaymentForm: vm.ipaymentForm,
                    iamount: vm.iamount

                };

                $http.post(url, newdata).then(function (response) {

                    window.alert("Successfully Updated!");
                    vm.incomes = response.data;
                    resetFields();

                }, function (response) {

                    window.alert("Failed to update income!");
                });



            }else {
                    console.log("Error Updating");
                }

                if(vm.id == null) {


                    var url = "/income/save";

                    var data = {

                        refNo: vm.refNo,
                        incomeDate: vm.incomeDate,
                        descc: vm.descc,
                        incomeType: vm.incomeType,
                        ipaymentForm: vm.ipaymentForm,
                        iamount: vm.iamount

                    };

                    console.log("saving frontend data ", data);

                    $http.post(url, data).then(function (response) {

                        window.alert("Successfully Saved!");
                        vm.incomes = response.data;
                        resetFields();

                    }, function (response)
                    {
                        window.alert("Failed to save income!");
                    });




                }

        }
        // vm.income = [];



        // JUST TO PASS THE DATA TO THE FORM
        vm.editIncome=function(id,ref,date,descc,type,pay,amount){

            var datee = new Date(date);
            vm.id = id;
            vm.refNo = id;
             vm.incomeDate = datee;


            vm.descc = descc;
            vm.incomeType = type;
            vm.ipaymentForm = pay;
            vm.iamount = parseInt(amount);


        };





        function deleteIncome(id){
            var url = "/income/delete/" + id;
            $http.post(url).then(function(response){
                vm.incomes = response.data;
            });

        }

        function back(){

            resetFields();
            window.location.reload();

        }


        function exportExcel(income) {


            var fileName = "Daily_Income";
            var opts= [{ sheetid:'Expense', header:true }];
            alasql('SELECT * INTO XLSX("'+fileName +'.xlsx",?) FROM ?', [opts, [income]]);

        }



        vm.today = function() {
            vm.incomeDate = new Date();
        };
        vm.today();

        vm.clear = function() {
            vm.incomeDate = null;
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


