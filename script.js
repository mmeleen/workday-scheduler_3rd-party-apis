// Get current date and apply to header
$("#currentDay").text(moment().format('MMMM Do, YYYY'));


// ---- Variable Declarations, localStorage Gets, & background colors ----

var currentHour = moment().hour();
// currentHour = 10; //test case
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