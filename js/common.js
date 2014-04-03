var App = angular.module('App', []);

App.controller('loadContent', function($scope, $http) {
	$http.get('content/content.json').then(function(res){
    	$scope.items = res.data;
    });
});