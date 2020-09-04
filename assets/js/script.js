// Seeting up time display
var timeDisplay = $("#currentDay");
var theDay = moment();

timeDisplay.text(theDay.format("dddd, hA"));

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];



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


// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// function keepTasks(tasks) {
//     for (var i = 0; i < tasks.length; i++) {
//         var taskKeep = $("textarea");
//         taskKeep.text(tasks[i]);
//     }
// }


// $("saveBtn").on('click', function(event) {
//     var taskToDo = $("description")
//         .val()
//         .trim();
//     tasks.push(taskToDo)

//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     saveTasks(taskToDo);
// })