// Get current date and apply to header
$("#currentDay").text(moment().format('MMMM Do, YYYY'));


// ---- Variable Declarations & localStorage Value Retrieval ----

var currentHour = moment().hour();
console.log(currentHour);

// 9AM
var nineLock = $("#nine-lock");
var nineText = $("#nine-text");
nineText.val(localStorage.getItem("nineEntry"));

// 10AM
var tenLock = $("#ten-lock");
var tenText = $("#ten-text");
tenText.val(localStorage.getItem("tenEntry"));

// 11AM
var elevenLock = $("#eleven-lock");
var elevenText = $("#eleven-text");
elevenText.val(localStorage.getItem("elevenEntry"));


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