app = angular.module('spring-gtd-app', ['ngResource','spring-data-rest']);

app.controller('ListCtrl', ['$scope','$http','SpringDataRestAdapter',function($scope,$http,spa) {
	$scope.message = "Hello World";

	// do something to get the data
	$http.get("http://localhost:8080/tasks").success(function (resp) {
		var processedResponse = new spa(resp);
		$scope.tasks = processedResponse._embeddedItems; 
	});

}]);



function Hello($scope, $http) {
    $http.get('http://localhost:8080/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
