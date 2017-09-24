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
//            }).state("create", {
//                url: "/create",
//                templateUrl: "/views/user/create.html",
//                controller: "userController"
// 

            });
        })
//        .constant("globalConfig", {
//            apiAddress: 'http://localhost:8080/'
//        });
})();