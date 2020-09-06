// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, MMMM Do YYYY"));

// var for get items into local storage
var tasks = JSON.parse(localStorage.getItem("tasks")) || {}




// function to set background colors based on time 
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


// function to save tasks after refreshing
var saveRefresh = function() {

    // creating click event for save button 
    $(".saveBtn").on('click', function() {
            var taskToDo = $(this).siblings(".description").val();
            var hourSave = $(this).parent().attr("id")


            tasks[hourSave] = taskToDo
            localStorage.setItem("tasks", JSON.stringify(tasks))


        })
        // iterating through tasks to save into local storage
    for (var i = 8; i < 18; i++) {
        $("#hour" + i.toString() + " .description").val(tasks["hour" + i.toString()])
    }

}
saveRefresh();