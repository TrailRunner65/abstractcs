var App = angular.module('App', ['ui.bootstrap']);

App.controller('loadContent', function($scope, $http) {
	$http.get('content/content.json').then(function(res){
    	$scope.content = res.data;
    });

    $scope.groups = [
        {
            title: "Pace Calculator",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Race time Calculator",
            content: "Dynamic Group Body - 2"
        }
    ];
});