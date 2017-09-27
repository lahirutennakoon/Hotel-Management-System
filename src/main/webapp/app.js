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
                url: "/requestLeaves",
                templateUrl: "/views/employee/leaveRequestForm.html",
                controller: "requestLeavesController"
 

            });
        })
//        .constant("globalConfig", {
//            apiAddress: 'http://localhost:8080/'
//        });
})();