(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashController', Controller);

    Controller.$inject = ['$http'];

    function Controller($http) {

        console.log("dash controller");

        var vm = this;

        vm.rooms = [];


        vm.getAll = getAll;


        init();

        //GET ALL RECORDS
        function init(){
            getAll();
        }



        function getAll(index){
            console.log("index", index);
            console.log("getall function called");
            var url = "/rooms/all";
            var roomPromise = $http.get(url);
            roomPromise.then(function(response){
                vm.roomNumbers = [];
                vm.rooms = response.data;

                //Available Count
                vm.available = 0;
                vm.occupied = 0;
                vm.inspect = 0;
                vm.clean = 0;
                for(var i = 0; i < vm.rooms.length; i++){

                    console.log("vm.rooms[i]", vm.rooms[i]);

                    if(index == "Available Rooms"){
                        if(vm.rooms[i].roomStatus == "Available"){

                            vm.roomNumbers.push(vm.rooms[i]);

                        }

                    }

                    if(index == "Occupied Rooms"){
                        if(vm.rooms[i].roomStatus == "Occupied"){

                            vm.roomNumbers.push(vm.rooms[i]);

                        }

                    }

                    if(index == "Rooms to be cleaned"){
                        if(vm.rooms[i].roomStatus == "Clean"){

                            vm.roomNumbers.push(vm.rooms[i]);

                        }

                    }

                    if(index == "Rooms to be inspected"){
                        if(vm.rooms[i].roomStatus == "Inspect"){

                            vm.roomNumbers.push(vm.rooms[i]);

                        }

                    }

                    if(vm.rooms[i].roomStatus == "Available"){

                      vm.available++;

                    }

                    if(vm.rooms[i].roomStatus == "Occupied"){

                        vm.occupied++;

                    }

                    if(vm.rooms[i].roomStatus == "Clean"){

                        vm.clean++;

                    }

                    if(vm.rooms[i].roomStatus == "Inspect"){

                        vm.inspect++;

                    }

                    // vm.totalRooms = {};
                    // vm.totalRooms = vm.rooms[i].roomNo;
                }


                // //Occupied Count
                // vm.occupied = 0;
                // for(var i = 0; i < vm.rooms.length; i++){
                //
                //     if(vm.rooms[i].roomStatus == "Occupied"){
                //
                //         vm.occupied++;
                //
                //     }
                // }
                //
                // //Clean Count
                // vm.clean = 0;
                // for(var i = 0; i < vm.rooms.length; i++){
                //
                //     if(vm.rooms[i].roomStatus == "Clean"){
                //
                //         vm.clean++;
                //
                //     }
                // }
                //
                // //Inspect Count
                // vm.inspect = 0;
                // for(var i = 0; i < vm.rooms.length; i++){
                //
                //     if(vm.rooms[i].roomStatus == "Inspect"){
                //
                //         vm.inspect++;
                //
                //     }
                // }


                   vm.total =  "Total Rooms";
                    vm.av="Available Rooms";
                    vm.occ="Occupied Rooms";
                    vm.cl="Rooms to be cleaned";
                    vm.ins="Rooms to be inspected";



                if(index == "Total Rooms"){
                    vm.roomNumbers = vm.rooms;
                }



                console.log("vm.roomNumbers", vm.roomNumbers);

                console.log("Successfully got room data", vm.rooms);
            });
        }






    }

})();


