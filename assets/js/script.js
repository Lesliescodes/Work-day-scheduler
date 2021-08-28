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
    var honeyBunchesOfOats = $(this).attr("id");
    var keyEl = localStorage.getItem(honeyBunchesOfOats);
    if (keyEl !== null) {
      $(this).children(".textarea").val(keyEl);
    }
  });
  