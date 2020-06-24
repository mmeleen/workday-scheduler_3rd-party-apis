var fullDate = new Date();
var twoDigitMonth = fullDate.getMonth() + ""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
var twoDigitDate = fullDate.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
var currentDate = twoDigitMonth + "/" + twoDigitDate + "/" + fullDate.getFullYear();
$("#currentDay").text(currentDate);

var nineLock = $("#nine-lock");
var nineText = $("#nine-text");
nineText.val(localStorage.getItem("nineEntry"));

nineLock.on("click", function() {
  console.log(nineText.val());
  var nineEntry = nineText.val();
  localStorage.setItem("nineEntry", nineEntry);
});