angular.module('app').controller('complaintController', function($scope, $http, $window)
{
    $scope.addComplaint=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            customerName:$scope.customerName,
            description:$scope.description,
            dateCreated:$scope.dateCreated,
            expectedGuestsNumber:$scope.expectedGuestsNumber
        }

        console.log(data);

        $http.post("/addComplaint", data, config).then(function (response) {
            $window.alert("Failed to create Complaint!");
        }, function (response) {
            $window.alert("Complaint created successfully!");

            //window.location.reload();
        });

        $scope.customerName="";
        $scope.description="";
        $scope.dateCreated="";
        $scope.suggessions="";

    }
});