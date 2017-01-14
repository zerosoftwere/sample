angular.module('app', ['ngRoute', 'app.directives', 'app.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.tpl',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: 'about.tpl',
        controller: 'AboutCtrl'
    })
    .when('/contact', {
        templateUrl: 'contact.tpl',
        controller: 'ContactCtrl'
    })
}]);