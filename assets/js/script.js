// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, hA"));