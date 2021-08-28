$("#currentDay").text(moment().format("dddd, MMMM Do ")); //https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
//store the data https://stackoverflow.com/questions/61583553/how-to-use-jquery-to-save-the-text-on-the-page-even-after-refreshing-it
$(".saveBtn").click(function () {
    console.log($(this));
    console.log($(".saveBtn"));
    var time = $(this).parent().attr("id");
    var textarea = $(this).siblings(".textarea").val();
    localStorage.setItem(time, textarea);
  })

  //retrieve the data
$(".time-block").each(function () {
    console.log($(".time-block"));
    var queenLeslie = $(this).attr("id");
    var keyEl = localStorage.getItem(queenLeslie);
    if (keyEl !== null) {
      $(this).children(".textarea").val(keyEl);
    }
  });
  //update color based upon how close the deadline is 
function urgencyNotifier() {
    hour = time.hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id")); 
        if (currentHour > hour) {
          $(this).removeClass(["past", "present"]).addClass("future");
        } 
        else if (currentHour === hour) {
          $(this).removeClass(["past", "future"]).addClass("present");
        } 
        else {
          $(this).removeClass(["present", "future"]).addClass("past");
        }
    });
  }
  //utilizes moment.js
  var time = moment();
  //runs urgencyNotifier function
  urgencyNotifier();