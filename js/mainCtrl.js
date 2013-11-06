app.controller("MainCtrl", function($scope, TestingService){
    $scope.httpMethod = "GET";
    $scope.url = "";
    $scope.path = "";
    $scope.postData = "";

    $scope.result = {};

    $scope.fireACall = function() {
        $("#submitButton").button('loading');
        var json = {};
        if ($scope.postData.length > 0) {
            json = JSON.parse($scope.postData);
        }
        TestingService.testAPI($scope.httpMethod, $scope.url, $scope.path, json).then(function (promise) {
            $scope.result = promise;
            $("#submitButton").button('reset');
        });
    };

});
