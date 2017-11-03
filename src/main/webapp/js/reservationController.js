angular.module('app').controller('reservationController', function($scope, $http, $window)
{
    $scope.addReservation=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            customerName:$scope.customerName,
            venue:$scope.venue,
            date:$scope.date,
            time:$scope.time,
            numberOfPeople:$scope.numberOfPeople
        }

        console.log(data);

        $http.post("/addReservation", data, config).then(function (response) {
            $window.alert("Failed to make Reservation!");
        }, function (response) {
            $window.alert("Reservation made successfully!");

            //window.location.reload();
        });

        $scope.customerName="";
        $scope.venue="";
        $scope.date="";
        $scope.time="";
        $scope.numberOfPeople="";

    }
});