var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minsEl = document.getElementById("mins");
var secondsEl = document.getElementById("seconds");

var newYear = "1 Jan 2023";

function countdown() {
    var newYearDate = new Date(newYear);
    var currentDate = new Date();

    var totalSeconds = (newYearDate - currentDate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}

// initial call
countdown();

setInterval(countdown, 1000);
