// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, hA"));


$("textarea").blur()



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




$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var taskToDo = $(this).siblings(".description").val();
        var hourSave = $(this).parent().attr("id")

        localStorage.setItem(hourSave, taskToDo);
    })
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));


})