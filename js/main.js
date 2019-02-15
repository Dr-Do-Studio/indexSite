var valueElement = document.getElementById("value");

var start = 0;
var end = 100;
var duration = 100; // In milliseconds (divide by 1000 to get seconds).
var framerate = 50; // In milliseconds (divide by 1000 to get seconds).

var toAdd = ((end - start) * framerate) / duration;

var interval = setInterval(function() {
  var currentValue = parseFloat(valueElement.innerHTML);

  if (currentValue >= end) {
    clearInterval(interval);
    return;
  }

  valueElement.innerHTML =
    !isNaN(currentValue) == true ? currentValue + toAdd : toAdd;
}, framerate);
