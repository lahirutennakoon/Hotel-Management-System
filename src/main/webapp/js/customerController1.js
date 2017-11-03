(function() {
    'use strict';

    angular
        .module('app')
        .controller('customerController1', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("customer controller");



        var vm = this;

        vm.customers = [];

        vm.getAll = getAll;
        vm.resetFields = resetFields;
        vm.deleteCustomer = deleteCustomer;
        vm.saveCustomer = saveCustomer;
        vm.back = back;
       // vm.exportExcel = exportExcel;

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
        // vm.customerDate = dateTime;

        //Pagination
        // vm.currentPage = 1;
        // vm.itemsPerPage = 5;


        function resetFields(){
            vm.fullName="";
            vm.nic="";
            vm.mobileNumber="";
            vm.email="";
            vm.gender="";
        }


        function getAll(){
            console.log("getall function called");
            var url = "/customer/all";
            var customerPromise = $http.get(url);
            customerPromise.then(function(response){
                vm.customers = response.data;
                console.log("Successfully got customer data", vm.customers);
            });
        }


        //SAVING AND UPDATING
        function saveCustomer() {
            // console.log("customer = ", customer);
            console.log("save function called");


            if(vm.id != null) {



                var url = "/customer/update/" + vm.id;

                var newdata = {

                    fullName: vm.fullName,
                    nic: vm.nic,
                    mobileNumber: vm.mobileNumber,
                    email: vm.email,
                    gender: vm.gender

                };

                $http.post(url, newdata).then(function (response) {

                    window.alert("Successfully Updated!");
                    vm.customers = response.data;
                    resetFields();

                }, function (response) {

                    window.alert("Failed to update customer!");
                });



            }else {
                console.log("Error Updating");
            }

            if(vm.id == null) {


                var url = "/customer/save";

                var data = {

                    fullName: vm.fullName,
                    nic: vm.nic,
                    mobileNumber: vm.mobileNumber,
                    email: vm.email,
                    gender: vm.gender
                };

                console.log("saving frontend data ", data);

                $http.post(url, data).then(function (response) {

                    window.alert("Successfully Saved!");
                    vm.customers = response.data;
                    resetFields();
                }, function (response)
                {
                    window.alert("Failed to save customer!");
                });




            }

        }
        // vm.customer = [];



        // JUST TO PASS THE DATA TO THE FORM
        vm.editCustomer=function(id,fullname,nic,mobile,email,gender){

            vm.id = id;

            vm.fullName = fullname;


            vm.nic = nic;
            vm.mobileNumber = mobile;
            vm.email = email;
            vm.gender = gender;


        };





        function deleteCustomer(id){
            var url = "/customer/delete/" + id;
            $http.post(url).then(function(response){
                vm.customers = response.data;
            });

        }

        function back(){

            resetFields();
            window.location.reload();

        }

        //
        // function exportExcel(customer) {
        //
        //
        //     var fileName = "Daily_Expense";
        //     var opts= [{ sheetid:'Expense', header:true }];
        //     alasql('SELECT * INTO XLSX("'+fileName +'.xlsx",?) FROM ?', [opts, [customer]]);
        //
        // }

        // vm.today = function() {
        //     vm.customerDate = new Date();
        // };
        // vm.today();
        //
        // vm.clear = function() {
        //     vm.customerDate = null;
        // };
        //
        // vm.inlineOptions = {
        //     customClass: getDayClass,
        //     minDate: new Date(),
        //     showWeeks: true
        // };
        //
        // vm.dateOptions = {
        //     dateDisabled: disabled,
        //     formatYear: 'yy',
        //     maxDate: new Date(2020, 5, 22),
        //     minDate: new Date(),
        //     startingDay: 1
        // };
        //
        // // Disable weekend selection
        // function disabled(data) {
        //     var date = data.date,
        //         mode = data.mode;
        //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        // }
        //
        // vm.toggleMin = function() {
        //     vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
        //     vm.dateOptions.minDate = vm.inlineOptions.minDate;
        // };
        //
        // vm.toggleMin();
        //
        // vm.open1 = function() {
        //     vm.popup1.opened = true;
        // };
        //
        // vm.open2 = function() {
        //     vm.popup2.opened = true;
        // };
        //
        // vm.setDate = function(year, month, day) {
        //     vm.incomeDate = new Date(year, month, day);
        // };
        //
        // vm.formats = ['yyyy-MM-dd'];
        // vm.format = vm.formats[0];
        // vm.altInputFormats = ['M!/d!/yyyy'];
        //
        // vm.popup1 = {
        //     opened: false
        // };
        //
        // vm.popup2 = {
        //     opened: false
        // };
        //
        // var tomorrow = new Date();
        // tomorrow.setDate(tomorrow.getDate() + 1);
        // var afterTomorrow = new Date();
        // afterTomorrow.setDate(tomorrow.getDate() + 1);
        // vm.events = [
        //     {
        //         date: tomorrow,
        //         status: 'full'
        //     },
        //     {
        //         date: afterTomorrow,
        //         status: 'partially'
        //     }
        // ];
        //
        // function getDayClass(data) {
        //     var date = data.date,
        //         mode = data.mode;
        //     if (mode === 'day') {
        //         var dayToCheck = new Date(date).setHours(0,0,0,0);
        //
        //         for (var i = 0; i < vm.events.length; i++) {
        //             var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);
        //
        //             if (dayToCheck === currentDay) {
        //                 return vm.events[i].status;
        //             }
        //         }
        //     }
        //
        //     return '';
        // }



    }

})();


