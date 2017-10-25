(function() {
    'use strict';

    angular.module('app', [
        "ui.router"
    ])
        .config(function($stateProvider, $urlRouterProvider)
        {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("dailyexpense", {
                url: "/dailyexpense",
                templateUrl: "/views/account/dailyExpense.html",
                controller: "expenseController"
            }).state("requestLeaves", {
                url: "/requestLeaves/:nicUrl",
                templateUrl: "/views/employee/leaveRequestForm.html",
                controller: "requestLeavesController"
            }).state("menus", {
                url: "/menus",
                templateUrl: "/views/chef/menu.html",
                controller: "menuController"
            }).state("items", {
                url: "/items",
                templateUrl: "/views/inventory/item.html",
                controller: "itemController"
            });
        })
//        .constant("globalConfig", {
//            apiAddress: 'http://localhost:8080/'
//        });
})();