var app = angular.module('APITesting', []);

app.config(function($routeProvider, $compileProvider) {

  $routeProvider.when('/', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/' });
  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|magnet):/);

});
