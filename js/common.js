var App = angular.module('App', ['ui.bootstrap']);

App.controller('loadContent', function($scope, $http) {
	$http.get('content/content.json').then(function(res){
    	$scope.content = res.data;
    });
});