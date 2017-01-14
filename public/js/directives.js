angular.module('app.directives', [])
.directive('form', function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            say: "@"
        },
        template: '<h1>{{say}}</h1>'
    };
});