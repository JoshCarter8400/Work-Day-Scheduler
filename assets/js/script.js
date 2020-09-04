// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, hA"));



var createItem = function() {
    var itemE1 = $("textarea").addClass("description");
    var itemEntry = S("<input>")
        .addClass("description")
        .text(itemE1)
}

var taskNotification = function() {
    var currentTime = moment().format("H")

    $("textarea").each(function() {
        var hour = parseInt($(this).attr('data-hour'))
        console.log(hour)
        if (hour == currentTime) {
            $(this).addClass("present")
        } else if (hour > currentTime) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }
    })






}
taskNotification();