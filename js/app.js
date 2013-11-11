var app = angular.module('APITesting', []);

app.config(function($routeProvider, $compileProvider, $httpProvider) {

  $routeProvider.when('/', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/' });


  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

});

app.factory("TestingService", ['$http', function (async) {
      return {
            testAPI: function(httpMethod, url, path, postData) {
              var promise = async({method: httpMethod, url: 'http://' + url + '/' + path, withCredentials: true, data: JSON.stringify(postData), useXDomain: true})
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
