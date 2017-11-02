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

   $scope.deleteMenu=function (foodId)
   {
        $http.delete("/deleteMenu?foodId=" + foodId).then(function (response)
       {
           console.log("Menu deleted successfully");
           $scope.getMenus();
       }, function (response)
       {
           $scope.getResultMessage = "Failed to delete!";
       });

   }

   //populate the form with the details to edit
   $scope.viewEditDetails=function (foodId, mealType, date, foodName, foodType)
   {
       $scope.foodId=foodId;
       $scope.mealType=mealType;
       $scope.foodName=foodName;
       $scope.foodType=foodType;

       //format date
       var dateToSplit=date.split("-");
       var mm=dateToSplit[1];
       var dd=dateToSplit[2];
       var yyyy=dateToSplit[0];
       var dateString=mm + "/" + dd + "/" + yyyy;
       console.log("date:" + dateString);
       $scope.date=new Date(dateString);

       //hide 'create' button and show 'edit' button and 'cancel' button
       $scope.hideCreateButton=true;
       $scope.showEditButton=true;
       $scope.showCancelButton=true;
   }

   //edit menu
   $scope.editMenu=function ()
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
       };

       console.log(data);
       var foodIdInt=parseInt($scope.foodId);
       $http.put("/editMenu?foodId=" + foodIdInt, data, config).then(function (response) {
           $window.alert("Failed to update menu!");
       }, function (response) {
           $window.alert("Menu updated sucessfully!");
           $scope.getMenus();
           //window.location.reload();
       });

       $scope.date="";
       $scope.foodName="";

       $scope.hideCreateButton=false;
       $scope.showEditButton=false;
       $scope.showCancelButton=false;
   }

    //cancel editing
    $scope.cancelEdit=function ()
    {
        $scope.date="";
        $scope.foodName="";

        $scope.hideCreateButton=false;
        $scope.showEditButton=false;
        $scope.showCancelButton=false;
    }
    //call the function to get values from database to table
   $scope.getMenus();
});