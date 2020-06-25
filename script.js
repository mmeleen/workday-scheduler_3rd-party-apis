// Get current date and apply to header
$("#currentDay").text(moment().format('MMMM Do, YYYY'));


// ---- Variable Declarations, localStorage Gets, & background colors ----

var currentHour = moment().hour();
//currentHour = 11; //test case
console.log(currentHour);

// 9AM
var nineLock = $("#nine-lock");
var nineText = $("#nine-text");
nineText.val(localStorage.getItem("nineEntry"));
colorCode(nineText, 9);

// 10AM
var tenLock = $("#ten-lock");
var tenText = $("#ten-text");
tenText.val(localStorage.getItem("tenEntry"));
colorCode(tenText, 10);

// 11AM
var elevenLock = $("#eleven-lock");
var elevenText = $("#eleven-text");
elevenText.val(localStorage.getItem("elevenEntry"));
colorCode(elevenText, 11);

// 12PM
var twelveLock = $("#twelve-lock");
var twelveText = $("#twelve-text");
twelveText.val(localStorage.getItem("twelveEntry"));
colorCode(twelveText, 12);

// 1PM
var oneLock = $("#one-lock");
var oneText = $("#one-text");
oneText.val(localStorage.getItem("oneEntry"));
colorCode(oneText, 13);

// 2PM
var twoLock = $("#two-lock");
var twoText = $("#two-text");
twoText.val(localStorage.getItem("twoEntry"));
colorCode(twoText, 14);

// 3PM
var threeLock = $("#three-lock");
var threeText = $("#three-text");
threeText.val(localStorage.getItem("threeEntry"));
colorCode(threeText, 15);

// 4PM
var fourLock = $("#four-lock");
var fourText = $("#four-text");
fourText.val(localStorage.getItem("fourEntry"));
colorCode(fourText, 16);

// 5PM
var fiveLock = $("#five-lock");
var fiveText = $("#five-text");
fiveText.val(localStorage.getItem("fiveEntry"));
colorCode(fiveText, 17);


// ---- Lock Button Clicks & localStorage Saves ----

// 9AM
nineLock.on("click", function() {
  console.log(nineText.val());
  var nineEntry = nineText.val();
  localStorage.setItem("nineEntry", nineEntry);
});

// 10AM
tenLock.on("click", function() {
  console.log(tenText.val());
  var tenEntry = tenText.val();
  localStorage.setItem("tenEntry", tenEntry);
});

// 11AM
elevenLock.on("click", function() {
  console.log(elevenText.val());
  var elevenEntry = elevenText.val();
  localStorage.setItem("elevenEntry", elevenEntry);
});

// 12PM
twelveLock.on("click", function() {
  console.log(twelveText.val());
  var twelveEntry = twelveText.val();
  localStorage.setItem("twelveEntry", twelveEntry);
});

// 1PM
oneLock.on("click", function() {
  console.log(oneText.val());
  var oneEntry = oneText.val();
  localStorage.setItem("oneEntry", oneEntry);
});

// 2PM
twoLock.on("click", function() {
  console.log(twoText.val());
  var twoEntry = twoText.val();
  localStorage.setItem("twoEntry", twoEntry);
});

// 3PM
threeLock.on("click", function() {
  console.log(threeText.val());
  var threeEntry = threeText.val();
  localStorage.setItem("threeEntry", threeEntry);
});

// 4PM
fourLock.on("click", function() {
  console.log(fourText.val());
  var fourEntry = fourText.val();
  localStorage.setItem("fourEntry", fourEntry);
});

// 5PM
fiveLock.on("click", function() {
  console.log(fiveText.val());
  var fiveEntry = fiveText.val();
  localStorage.setItem("fiveEntry", fiveEntry);
});


// ---- Functions ----

function colorCode(inputEl, hour) {
  if (hour < currentHour) {
    inputEl.addClass("bg-secondary");
  } else if (hour === currentHour) {
    inputEl.addClass("bg-warning");
  } else {
    inputEl.addClass("bg-success");
  }
}