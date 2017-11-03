angular.module('app').controller('eventController', function($scope, $http, $window)
{
    $scope.addEvent=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            customerName:$scope.customerName,
            eventType:$scope.eventType,
            date:$scope.date,
            expectedGuestsNumber:$scope.expectedGuestsNumber
        }

        console.log(data);

        $http.post("/addEvent", data, config).then(function (response) {
            $window.alert("Failed to create Event details!");
        }, function (response) {
            $window.alert("Event details created successfully!");

            //window.location.reload();
        });

        $scope.customerName="";
        $scope.eventType="";
        $scope.date="";
        $scope.expectedGuestsNumber="";

    }
});