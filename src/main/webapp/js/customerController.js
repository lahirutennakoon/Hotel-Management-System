// angular.module('app').controller('customerController', function($scope, $http, $window)
// {
//     $scope.addCustomer=function ()
//     {
//         var config = {
//             headers : {
//                 'Content-Type': 'application/json;charset=utf-8;'
//             }
//         }
//
//         var data = {
//             fullName:$scope.fullName,
//             nic:$scope.nic,
//             mobileNumber:$scope.mobileNumber,
//             email:$scope.email,
//             gender:$scope.gender
//         }
//
//         console.log(data);
//
//         $http.post("/addCustomer", data, config).then(function (response) {
//             $window.alert("Failed to create Customer details!");
//         }, function (response) {
//             $window.alert("Customer details created successfully!");
//
//             //window.location.reload();
//         });
//
//         $scope.fullName="";
//         $scope.nic="";
//         $scope.mobileNumber="";
//         $scope.email="";
//         $scope.gender="";
//     }
// });