angular.module('spring-gtd-app', ['restangular']).
  config(function ($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl,
      });
      RestangularProvider.setBaseUrl('tasks');
  });


function ListCtrl($scope, Restangular) {
   $scope.projects = Restangular.all("tasks").getList().$object;
}


function Hello($scope, $http) {
    $http.get('http://localhost:8080/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
