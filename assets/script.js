// show current date and time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//loads html then css
$(document).ready(function () {

    // save button click listener for user input
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).sibilings(".description").val();
        var time = $(this).parent().attr("id");

        // set items to local storage    
        localStorage.setItem(time, text);
    })

    //load any saved data from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    

// get current number of hours
function timeTracker() {
    var timeNow = moment().hour();
 
 // loop through time blocks   
    $(".time-block").each(function() {
        var blockTime= parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, timeNow )
 
        //add or remove classes for background       
        if (blockTime < timeNow) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            
        }
       
        else if (blockTime === timeNow) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
            
        }
       
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

timeTracker();

})
