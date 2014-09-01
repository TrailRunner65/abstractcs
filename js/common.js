var RunningApp = angular.module('RunningApp', ['ui.bootstrap']);

var MILE = 1.609344;
var KM = 1.0;

RunningApp.controller('loadContent', function($scope, $http) {
	$http.get('content/content.json').then(function(res){
    	$scope.content = res.data;
    });
});

RunningApp.controller('paceCalc', function($scope, $http) {
    var timePerKm = 0;
    $scope.mileKm = 'km';

    $scope.calculatePace = function () {
        var totalTargetMins = hoursAndMinsToMins($scope.targetHours, $scope.targetMins);
        timePerKm = totalTargetMins / $scope.distance;
    }

    $scope.getPace = function () {

        var offset = KM;
        if ($scope.mileKm == 'mile') {
            offset = MILE;
        }
        return timePerKm * offset;
    }

    hoursAndMinsToMins = function(hours, mins) {
        return Number(hours) * 60 + Number(mins);
    };

});

