(function() {
    'use strict';

    angular
        .module('app')
        .controller('roomsController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("rooms controller");

        var vm = this;

        vm.rooms = [];


        vm.getAll = getAll;
        // vm.getOne = getOne;
        vm.saveRoom = saveRoom;
        vm.editRoom = editRoom;
        vm.deleteRoom = deleteRoom;

        //Pagination
        vm.currentPage = 1;
        vm.itemsPerPage = 5;

        init();

        //GET ALL RECORDS
        function init(){
            getAll();
        }

        function getAll(){
            console.log("getall function called");
            var url = "/rooms/all";
            var roomPromise = $http.get(url);
            roomPromise.then(function(response){
                vm.rooms = response.data;
                console.log("Successfully got room data", vm.rooms);
            });
        }

        // function getOne(id){
        //     console.log("get one function called" , id);
        //     var url = "/room/getOne/" + id;
        //     var roomPromise = $http.get(url);
        //     roomPromise.then(function(response){
        //
        //         vm.room = response.data;
        //         console.log("getone room data" ,vm.room);
        //     });
        // }


        // if ($state.current.name == "editRoom") {
        //
        //     var id = $stateParams.id;
        //
        //     getOne(id);
        // }

        //SAVING AND UPDATING
        function saveRoom() {
            // console.log("room = ", room);
            console.log("save function called");


            //UPDATE
            if(vm.room.id != null) {

                var url = "/rooms/update/" + vm.room.id;

                var newdata = {

                    roomNo: vm.room.roomNo,
                    roomType: vm.room.roomType,
                    roomStatus: vm.room.roomStatus,
                    roomRate: vm.room.roomRate,
                    noOfPerson: vm.room.noOfPerson,
                    adultRate: vm.room.adultRate,
                    childRate: vm.room.childRate,
                    remarks: vm.room.remarks,
                    assigned: vm.room.assigned

                };

                $http.post(url, newdata).then(function (response) {

                    console.log("successfully Updated");

                    vm.rooms = response.data;

                });


                vm.room.roomNo = "";
                vm.room.roomType= "";
                vm.room.roomStatus= "";
                vm.room.roomRate = "";
                vm.room.noOfPerson = "";
                vm.room.adultRate = "";
                vm.room.childRate = "";
                vm.room.remarks  ="";
                vm.room.assigned  ="";


                window.alert("Successfully Updated!");
                window.location.reload();

            }else {
                console.log("Error Updating");
            }

            //SAVE
            if(vm.room.id == null) {


                var url = "/rooms/save";

                var data = {

                    roomNo: vm.room.roomNo,
                    roomType: vm.room.roomType,
                    roomStatus: vm.room.roomStatus,
                    roomRate: vm.room.roomRate,
                    noOfPerson: vm.room.noOfPerson,
                    adultRate: vm.room.adultRate,
                    childRate: vm.room.childRate,
                    remarks: vm.room.remarks,
                    assigned: vm.room.assigned

                };

                console.log("saving frontend data ", data);

                $http.post(url, data).then(function (response) {

                    console.log("successfully Saved");
                    window.alert("Successfully Saved");
                    vm.rooms = response.data;

                });

                vm.room.roomNo = "";
                vm.room.roomType= "";
                vm.room.roomStatus= "";
                vm.room.roomRate = "";
                vm.room.noOfPerson = "";
                vm.room.adultRate = "";
                vm.room.childRate = "";
                vm.room.remarks  ="";
                vm.room.assigned  ="";

            } else{
                console.log("Saving error");


            }

        }

        //JUST TO PASS THE DATA TO THE FORM
        function editRoom(room){
            vm.room = room;
        }





        function deleteRoom(id){
            var url = "/rooms/delete/" + id;
            $http.post(url).then(function(response){
                vm.rooms = response.data;
            });

        }



    }

})();


