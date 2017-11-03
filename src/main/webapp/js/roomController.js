angular.module('app').controller('roomController', function($scope, $http, $window)
{
    //IT15021076
    $scope.addRoom=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        var data = {
            room_desk:$scope.room_desk,
            capacity:$scope.capacity,
            room_type:$scope.room_type,
            cost_per_day:$scope.cost_per_day,
            availability:$scope.availability
        }

        //console.log(data);

        $http.post("/addRoom", data, config).then(function (response) {
            $window.alert("Failed to add Room!");
        }, function (response) {
            $window.alert("Room Added to the System");
            $scope.getRooms();
        });
        $scope.clearInput();
    }

    //function to get all the employees to the main view
    $scope.getRooms=function ()
    {
        $http.get("/getRooms").then(function (response)
        {
            $scope.rooms = response.data;
            console.log("Room List loaded");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    //clear screen
    $scope.clearInput=function ()
    {

        $scope.room_desk="";
        $scope.capacity="";
        $scope.room_type="";
        $scope.cost_per_day="";
        $scope.availability="";
    }

    //cancel edit
    $scope.cancelbtn=function ()
    {
        $scope.clearInput();

        $scope.hideSaveBtn=false;
        $scope.showCancelBtn=false;
        $scope.showUpdateBtn=false;
    }

    //edit a room by getting it to load
    $scope.getRoomEdit=function (roomid, room_desk, capacity, room_type, cost_per_day, availability)
    {

        $scope.roomid=roomid;
        $scope.room_desk=room_desk;
        $scope.capacity=capacity;
        $scope.room_type=room_type;
        $scope.cost_per_day=cost_per_day;
        $scope.availability=availability;

        $scope.hideSaveBtn=true;
        $scope.showCancelBtn=true;
        $scope.showUpdateBtn=true;
    }

    //edit room from data loaded
    $scope.editRoom=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
//roomid room_desk capacity room_type cost_per_day availability
        var data = {
            room_desk:$scope.room_desk,
            capacity:$scope.capacity,
            room_type:$scope.room_type,
            cost_per_day:$scope.cost_per_day,
            availability:$scope.availability
        };

        console.log(data);

        var roomIdMain = parseInt($scope.roomid);
        $http.put("/editRoom?roomid=" + roomIdMain, data, config).then(function (response) {
            $window.alert("Failed to update room!");
        }, function (response) {
            $window.alert("room updated sucessfully!");
            $scope.getRooms();
        });

        $scope.clearInput();

        $scope.hideSaveBtn=false;
        $scope.showCancelBtn=false;
        $scope.showUpdateBtn=false;
    }


    // deleteRoom
    $scope.deleteRoom=function (roomid)
    {
        if (confirm("Are You Really Want to Remove this Room from System?")) {

            $http.delete("/deleteRoom?roomid="+roomid).then(function (response)
            {
                console.log("Room deleted!");
                $scope.getRooms();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to delete!";
            });
        }
        else
        {
            console.log("Room delete cancel!");
        }
    }

    //room available vacant functions

    //function to get all the rooms that are avaialable
    $scope.getAvailableRooms=function ()
    {
        $http.get("/getAvailableRooms").then(function (response)
        {
            $scope.avlrooms = response.data;
            console.log("getAvailableRooms List loaded");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    //function to get all the rooms that are vacant
    $scope.getVacantRooms=function ()
    {
        $http.get("/getVacantRooms").then(function (response)
        {
            $scope.vacrooms = response.data;
            console.log("getVacantRooms List loaded");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    //mark room as vacant
    $scope.bookRoom=function (roomid)
    {
        //
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        //
        if (confirm("Book this room ?")) {
            console.log("room booked!");
            $http.put("/bookRoom?roomid="+roomid,config).then(function (response)
            {
                console.log("room booked!");
                $scope.reloadRoomBooker();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to book room!";
            });
            $scope.reloadRoomBooker();
        }
        else
        {
            console.log("approve event cancel!");
        }
    }


    //mark room as available
    $scope.freeRoom=function (roomid)
    {
        //
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        //
        if (confirm("Free this room ?")) {
            console.log("room freed!");
            $http.put("/freeRoom?roomid="+roomid,config).then(function (response)
            {
                console.log("room booked!");
                $scope.reloadRoomBooker();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to free room!";
            });
            $scope.reloadRoomBooker();
        }
        else
        {
            console.log("free room cancel!");
        }
    }

    //cancel edit
    $scope.reloadRoomBooker=function ()
    {
        $scope.getVacantRooms();
        $scope.getAvailableRooms();

    }


    $scope.getRooms();

    $scope.reloadRoomBooker(); //del me
});