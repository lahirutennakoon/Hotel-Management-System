angular.module('app').controller('itemController', function($scope, $http, $window)
{
    //function to add an item
    $scope.addItem=function()
    {

        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            itemName: $scope.itemName,
            quantity: $scope.quantity,
            unitCost:$scope.unitCost,
            totalCost:$scope.unitCost*$scope.quantity
        };


        console.log(data);

        $http.post("/addItem", data, config).then(function (response) {
            $window.alert("Failed to add item!");
        }, function (response) {
            $window.alert("Item added sucessfully!");
            $scope.getItems();
            //window.location.reload();
        });

        $scope.itemName="";
        $scope.quantity="";
        $scope.unitCost="";
    }

    //function to get all the items
    $scope.getItems=function ()
    {
        $http.get("/getItems").then(function (response)
        {
            $scope.items = response.data;
            console.log("Items loaded successfully");
        }, function (response)
        {
            $scope.getResultMessage = "Failed to load!";
        });
    }

    $scope.getItems();

    $scope.deleteItem=function (itemId)
    {
        $http.delete("/deleteItem?itemId=" + itemId).then(function (response)
        {
            console.log("Item deleted successfully");
            $scope.getItems();
        }, function (response)
        {
            $scope.getResultMessage = "Failed to delete!";
        });
    }

    //populate the form with the details to edit
    $scope.viewEditDetails=function (itemId, itemName, quantity, unitCost, totalCost)
    {
        $scope.itemId=itemId;
        $scope.itemName=itemName;
        $scope.quantity=quantity;
        $scope.unitCost=unitCost;
        $scope.totalCost=totalCost;

        //hide 'create' button and show 'edit' button and 'cancel' button
        $scope.hideCreateButton=true;
        $scope.showEditButton=true;
        $scope.showCancelButton=true;
    }

    //edit item
    $scope.editItem=function ()
    {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        var data = {
            itemName: $scope.itemName,
            quantity: $scope.quantity,
            unitCost:$scope.unitCost,
            totalCost:$scope.unitCost*$scope.quantity
        };

        console.log(data);
        var itemIdInt=parseInt($scope.itemId);
        $http.put("/editItem?itemId=" + itemIdInt, data, config).then(function (response) {
            $window.alert("Failed to update item!");
        }, function (response) {
            $window.alert("Item updated sucessfully!");
            $scope.getItems();
            //window.location.reload();
        });

        $scope.itemName="";
        $scope.quantity="";
        $scope.unitCost="";
        $scope.totalCost="";

        $scope.hideCreateButton=false;
        $scope.showEditButton=false;
        $scope.showCancelButton=false;
    }

    //cancel editing
    $scope.cancelEdit=function ()
    {
        $scope.itemName="";
        $scope.quantity="";
        $scope.unitCost="";
        $scope.totalCost="";

        $scope.hideCreateButton=false;
        $scope.showEditButton=false;
        $scope.showCancelButton=false;
    }
});