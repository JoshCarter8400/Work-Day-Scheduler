// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.textContent = theDay.format("dddd, MMMM Do YYYY, h:mm:ss a");