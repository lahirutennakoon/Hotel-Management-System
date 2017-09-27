angular.module('app').controller('requestLeavesController', function($scope, $http, $window)
		{
			$scope.createLeaveRequest=function()
			{
				
				var config = {
		                headers : {
		                    'Content-Type': 'application/json;charset=utf-8;'
		                }
		        }
				
				var data = {
						nic: $scope.nic,
						reason: $scope.reason,
						noOfDays:$scope.noOfDays,
						startingDate:$scope.startingDate
			        };
				
				
				console.log(data);
				
				$http.post("/createLeaveRequest", data, config).then(function (response) {
		            $window.alert("Failed to create leave request!");
		        }, function (response) {
		        	$window.alert("Leave request created sucessfully!");
		        });
				
				$scope.nic="";
				$scope.reason="";
				$scope.noOfDays="";
				$scope.startingDate="";
				
			}
		});