'use strict';

angular.module("app", [
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ng.deviceDetector',
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/webclient/home');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('webclient', {
            url: '/webclient',
            templateUrl: '/states/webclient.html',
            controller: 'WebClientCtrl',
            abstract: true,
        })
        .state('webclient.home', {
            url: '/home',
            templateUrl: '/states/home/home.html',
            controller: 'HomeCtrl',
            menu: "home"
        })
})

.run(function($location, $window, $rootScope, $state) {
    console.log("run")
});