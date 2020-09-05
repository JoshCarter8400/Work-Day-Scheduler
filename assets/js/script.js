// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, MMMM Do YYYY"));


var tasks = JSON.parse(localStorage.getItem("tasks")) || {}





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



var saveRefresh = function() {

    $(".saveBtn").on('click', function() {
        var taskToDo = $(this).siblings(".description").val();
        var hourSave = $(this).parent().attr("id")


        tasks[hourSave] = taskToDo
        localStorage.setItem("tasks", JSON.stringify(tasks))


    })



    $("#hour8 .description").val(tasks["hour8"])
    $("#hour9 .description").val(tasks["hour9"])
    $("#hour10 .description").val(tasks["hour10"])
    $("#hour11 .description").val(tasks["hour11"])
    $("#hour12 .description").val(tasks["hour12"])
    $("#hour13 .description").val(tasks["hour13"])
    $("#hour14 .description").val(tasks["hour14"])
    $("#hour15 .description").val(tasks["hour15"])
    $("#hour16 .description").val(tasks["hour16"])
    $("#hour17 .description").val(tasks["hour17"])
    $("#hour18 .description").val(tasks["hour18"])



}
saveRefresh();