angular.module('app').controller('menuController', function($scope, $http, $window)
{
    //function to create a menu
    $scope.createMenu=function()
    {

        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            mealType: $scope.mealType,
            date: $scope.date,
            foodName:$scope.foodName,
            foodType:$scope.foodType,
            price: $scope.price
        };


        console.log(data);

        $http.post("/createMenu", data, config).then(function (response) {
            $window.alert("Failed to create menu!");
        }, function (response) {
            $window.alert("Menu created sucessfully!");
            $scope.getMenus();
            //window.location.reload();
        });

        $scope.date="";
        $scope.foodName="";
        $scope.price="";

    }

    //function to get all the menus
   $scope.getMenus=function ()
   {
       $http.get("/getMenus").then(function (response)
       {
           $scope.menus = response.data;
           console.log("Menus loaded successfully");
       }, function (response)
       {
           $scope.getResultMessage = "Failed to load!";
       });
   }

   $scope.deleteMenu=function (foodId, date, foodName, foodType, price)
   {
        sessionStorage.foodId=foodId;
        sessionStorage.date=date;
        console.log("foodId:"+foodId);
        console.log("date:"+date);
   }
    //call the function to get values from database to table
   $scope.getMenus();
});