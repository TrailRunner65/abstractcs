var MILE = 1.609344;
var KM = 1.0;
/*minsToHoursAndMins = function(mins) {
    var hours = Math.floor(mins / 60);
    var minutes = mins % 60;
    var time = hours + ":" + minutes;

    alert(time);
    return time;
}*/

hoursAndMinsToMins = function(hours, mins) {
    return Number(hours) * 60 + Number(mins);
};

paceCalc = function($scope) {
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
};
