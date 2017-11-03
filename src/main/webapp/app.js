(function() {
    'use strict';

    angular.module('app', [
        "ui.router",
        "ui.bootstrap"
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
            }).state("payroll", {
                url: "/payroll",
                templateUrl: "/views/account/salary.html",
                controller: "salaryController"
            }).state("rooms", {
                url: "/rooms",
                templateUrl: "/views/account/rooms.html",
                controller: "roomsController"

            }).state("assignEmployees", {
                url: "/assignEmployees",
                templateUrl: "/views/account/assignEmployees.html",
                controller: "roomsController"

            }).state("dashboard", {
                url: "/dashboard",
                templateUrl: "/views/account/dashboard.html",
                controller: "dashController"

            }).state("refund", {
                url: "/refund",
                templateUrl: "/views/account/refund.html",
                controller: "refundController"
            }).state("income", {
                url: "/income",
                templateUrl: "/views/account/dailyIncome.html",
                controller: "incomeController"
            }).state("customer", {
                url: "/customer",
                templateUrl: "/views/customer/customer.html",
                controller: "customerController1"


            });

        })
//        .constant("globalConfig", {
//            apiAddress: 'http://localhost:8080/'
//        });
})();