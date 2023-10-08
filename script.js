$(function (){
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

    $(".saveBtn").on("click", function (){
        var hourSave = $(this).parent().attr("id");
        var eventText = $(this).siblings(".description").val();
        localStorage.setItem(hourSave, eventText);
    });


function updateTimeColors() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function (){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past").removeClass("present future");
        } else if (blockHour === currentHour) {
            $(this).addClass("present").removeClass("past future");
        } else {
            $(this).addClass("future").removeClass("past present");
        }
    });
}

updateTimeColors();
setInterval(updateTimeColors, 1000);


$(".time-block").each(function () {
    var userHour = $(this).attr("id");
    var eventText = localStorage.getItem(userHour);
    if (eventText) {
        $(this).children(".description").val(eventText);
    }
});
});