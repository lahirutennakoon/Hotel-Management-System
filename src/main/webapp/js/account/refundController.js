(function() {
'use strict';

    angular
    .module('app')
    .controller('refundController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("refund controller");



        var vm = this;

        vm.refunds = [];

        vm.getAll = getAll;
        vm.resetFields = resetFields;
        vm.deleteRefund = deleteRefund;
        vm.saveRefund = saveRefund;
        vm.back = back;
      //  vm.exportExcel = exportExcel;

        init();

        function init(){
            getAll();
        }



        //Pagination
        vm.currentPage = 1;
        vm.itemsPerPage = 5;


       function resetFields(){
            vm.guestNo = "";
            vm.guestName = "";
            vm.refundDate = "";
            vm.paymentType = "";
            vm.refundAmount = "";
        }


        function getAll(){
        	console.log("getall function called");
            var url = "/refund/all";
            var refundPromise = $http.get(url);
            refundPromise.then(function(response){
                vm.refunds = response.data;
                console.log("Successfully got refund data", vm.refunds);
            });
        }


        //SAVING AND UPDATING
        function saveRefund() {
                // console.log("refund = ", refund);
            console.log("save function called");


            if(vm.id != null) {



                var url = "/refund/update/" + vm.id;

                var newdata = {

                    guestNo: vm.guestNo,
                    guestName: vm.guestName,
                    refundDate: vm.refundDate,
                    paymentType: vm.paymentType,
                    refundAmount: vm.refundAmount

                };

                $http.post(url, newdata).then(function (response) {

                    window.alert("Successfully Updated!");
                    vm.refunds = response.data;
                    resetFields();

                }, function (response) {

                    window.alert("Failed to update refund!");
                });



            }else {
                    console.log("Error Updating");
                }

                if(vm.id == null) {


                    var url = "/refund/save";

                    var data = {
                        guestNo: vm.guestNo,
                        guestName: vm.guestName,
                        refundDate: vm.refundDate,
                        paymentType: vm.paymentType,
                        refundAmount: vm.refundAmount

                    };

                    console.log("saving frontend data ", data);

                    $http.post(url, data).then(function (response) {

                        window.alert("Successfully Saved!");
                        vm.refunds = response.data;
                        resetFields();

                    }, function (response)
                    {
                        window.alert("Failed to save refund!");
                    });




                }

        }



        // JUST TO PASS THE DATA TO THE FORM
        vm.editRefund=function(id,guestNo,guestName,refundDate,paymentType,refundAmount){
            var datee = new Date(refundDate);
            vm.id = id;
            vm.guestNo = guestNo;

             vm.guestName = guestName;


            vm.refundDate = datee;
            vm.paymentType = paymentType;
            vm.refundAmount = parseInt(refundAmount);


        };





        function deleteRefund(id){
            var url = "/refund/delete/" + id;
            $http.post(url).then(function(response){
                vm.refunds = response.data;
            });

        }

        function back(){

            resetFields();
            window.location.reload();

        }


        // function exportExcel(refund) {
        //
        //
        //     var fileName = "Daily_Expense";
        //     var opts= [{ sheetid:'Expense', header:true }];
        //     alasql('SELECT * INTO XLSX("'+fileName +'.xlsx",?) FROM ?', [opts, [refund]]);
        //
        // }

        vm.today = function() {
            vm.refundDate = new Date();
        };
        vm.today();

        vm.clear = function() {
            vm.refundDate = null;
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


