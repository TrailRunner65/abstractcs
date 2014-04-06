/*minsToHoursAndMins = function(mins) {
    var hours = Math.floor(mins / 60);
    var minutes = mins % 60;
    var time = hours + ":" + minutes;

    alert(time);
    return time;
}*/

hoursAndMinsToMins = function(hours, mins) {
    return Number(hours) * 60 + Number(mins);
}

function paceCalc($scope) {
    var totalMins;

    $scope.calculatePace = function () {
        totalMins = hoursAndMinsToMins($scope.hours, $scope.minutes);
    }

    $scope.getPace = function () {
        //alert('dsfdf');
        return totalMins;
    }
}