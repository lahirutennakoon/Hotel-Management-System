angular.module('app').controller('eventController', function($scope, $http, $window)
{
    //IT15021076
    $scope.addEvent=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
//billed_to event_name event_date time_from time_to total_cost approval_state added_date , event_state
        var data = {
            billed_to:$scope.billed_to,
            event_name:$scope.event_name,
            event_date:$scope.event_date,
            time_from:$scope.time_from,
            time_to:$scope.time_to,
            total_cost:$scope.total_cost,
            approval_state:$scope.approval_state,
            added_date:$scope.added_date,
           // event_state:"T"
            event_state:$scope.event_state

            //$scope.date = new Date();
        }

        //console.log(data);

        $http.post("/addEvent", data, config).then(function (response) {
            $window.alert("Failed to add Event!");
        }, function (response) {
            $window.alert("Event Added to the System");
            $scope.getEvents();
        });
        $scope.clearInput();
    }

    //function to get all the employees to the main view
    $scope.getEvents=function ()
    {
        $http.get("/getEvents").then(function (response)
        {
            $scope.events = response.data;
            console.log("Event List loaded");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    //clear screen
    $scope.clearInput=function ()
    {
        //billed_to event_name event_date time_from time_to total_cost approval_state added_date
        $scope.billed_to="";
        $scope.event_name="";
        $scope.event_date="";
        $scope.time_from="";
        $scope.time_to="";
        $scope.total_cost="";
        $scope.approval_state="";
        $scope.added_date="";
        $scope.event_state="";

    }

    //cancel edit
    $scope.cancelbtn=function ()
    {
        $scope.clearInput();

        $scope.hideSaveBtn=false;
        $scope.showCancelBtn=false;
        $scope.showUpdateBtn=false;
    }

    //edit a employee by getting it to load
    $scope.getEditEvent=function (eventid, billed_to, event_name, event_date, time_from, time_to, total_cost, approval_state, added_date,event_state)
    {
        $scope.eventid=eventid;
        $scope.billed_to=billed_to;
        $scope.event_name=event_name;
        $scope.event_date=event_date;
        $scope.time_from=time_from;
        $scope.time_to=time_to;
        $scope.total_cost=total_cost;
        $scope.approval_state=approval_state;
        $scope.added_date=added_date;
        $scope.event_state=event_state;

        $scope.hideSaveBtn=true;
        $scope.showCancelBtn=true;
        $scope.showUpdateBtn=true;
    }

    //edit event from data loaded
    $scope.editEvent=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            billed_to:$scope.billed_to,
            event_name:$scope.event_name,
            event_date:$scope.event_date,
            time_from:$scope.time_from,
            time_to:$scope.time_to,
            total_cost:$scope.total_cost,
            approval_state:$scope.approval_state,
            added_date:$scope.added_date,
          //  event_state:"T"
            event_state:$scope.event_state
        };

        console.log(data);

        var eventIdMain = parseInt($scope.eventid);
        $http.put("/editEvent?eventid=" + eventIdMain, data, config).then(function (response) {
            $window.alert("Failed to update event!");
        }, function (response) {
            $window.alert("event updated sucessfully!");
            $scope.getEvents();
        });

        $scope.clearInput();

        $scope.hideSaveBtn=false;
        $scope.showCancelBtn=false;
        $scope.showUpdateBtn=false;
    }


    //delete event
    $scope.deleteEvent=function (eventid)
    {
        if (confirm("Are You Really Want to Delete This Employee?")) {

            $http.delete("/deleteEvent?eventid="+eventid).then(function (response)
            {
                console.log("Event deleted!");
                $scope.getEvents();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to delete!";
            });
        }
        else
        {
            console.log("Event delete cancel!");
        }
    }

    //call the function to get values from database to table
    $scope.getEvents();


    //approve event

    //function to get all the events that need approval
    $scope.getApprovalEvents=function ()
    {
        $http.get("/getApprovalEvents").then(function (response)
        {
            $scope.aprevents = response.data;
            console.log("Event Approval Req List loaded");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    //approve event
    $scope.approveEvent=function (eventid)
    {
        //
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        //
        if (confirm("Approve This Event ?")) {
            console.log("approved event!");
            $http.put("/approveEvent?eventid="+eventid,config).then(function (response)
            {
                console.log("Event Approved!");
                $scope.getApprovalEvents();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to approve event!";
            });
            $scope.getApprovalEvents();
        }
        else
        {
            console.log("approve event cancel!");
        }
    }

    //reject event
    $scope.rejectEvent=function (eventid)
    {
        //
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        //
        if (confirm("Reject This Event ?")) {
            console.log("reject event!");
            $http.put("/rejectEvent?eventid="+eventid,config).then(function (response)
            {
                console.log("Event reject!");
                $scope.getApprovalEvents();
            }, function (response)
            {
                $scope.getResultMessage = "Failed to reject event!";
            });
            $scope.getApprovalEvents();
        }
        else
        {
            console.log("reject event cancel!");
        }
    }


    $scope.getApprovalEvents();


});