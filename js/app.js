var app = angular.module('APITesting', []);

app.config(function($routeProvider, $compileProvider) {

  $routeProvider.when('/', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/' });
  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|magnet):/);

});

app.factory("TestingService", ['$http', function (async) {
      return {
            testAPI: function(httpMethod, url, path, postData) {
              var promise = async({method: httpMethod, url: 'http://' + url + '/' + path, withCredentials: true, data: JSON.stringify(postData)})
                .success(function (data, status, headers, config) {
                  return data;
                })
                .error(function (data, status, headers, config) {
                  return {"status": false};
                });

              return promise;
            }
      };
}]);
