angular.module('app').controller('requestLeavesController', function($scope, $http, $window, $stateParams)
		{
			//get the employee's NIC from the url
            $scope.nicUrl=$stateParams.nicUrl;
            console.log("nicUrl="+ $scope.nicUrl);

            //function to create a new leave request
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
						startingDate:$scope.startingDate,
						status:'Pending'
			        };
				
				
				console.log(data);
				
				$http.post("/createLeaveRequest", data, config).then(function (response) {
		            $window.alert("Failed to create leave request!");
		        }, function (response) {
		        	$window.alert("Leave request created sucessfully!");
                    $scope.getLeaveRequestsForEmployee();
		        	//window.location.reload();
		        });
				
				$scope.nic="";
				$scope.reason="";
				$scope.noOfDays="";
				$scope.startingDate="";
				
			}
			
			//use the GET method to get the leave request in the database
			/*$http.get("/getLeaveRequest").then(function (response)
					{
						$scope.leaves = response.data;
					}, function (response) 
					{
			            $scope.getResultMessage = "Failed to load!";
					});*/

			//function to get all the leave requests for a particular employee
			$scope.getLeaveRequestsForEmployee=function ()
			{
                $http.get("/getLeaveRequestForEmployee?nic=" + $scope.nicUrl).then(function (response)
                {
                    $scope.leaves = response.data;
                    console.log("Leave requests loaded successfully!");
                }, function (response)
                {
                    $scope.getResultMessage = "Failed to load!";
                });
            }

			//call the function to get values from database to table
            $scope.getLeaveRequestsForEmployee();

		});