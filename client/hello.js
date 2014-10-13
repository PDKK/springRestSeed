angular.module('spring-gtd-app', ['ngResource','hateoas']).
  config(function (HateoasInterceptorProvider ) {
    HateoasInterceptorProvider.transformAllResponses();
  });


function ListCtrl($scope, $resource) {
    $scope.tasks = $resource("/tasks").query(null, function() {

    });
}


function Hello($scope, $http) {
    $http.get('http://localhost:8080/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
