$(document).ready(function() {
  var display = "";
  $("button").click(function(event) {
    var $button = $(this);
    if ($button.val() === "AC") {
      display = "";
    } else if ($button.val() === "CE") {
      display = display.slice(0, display.length - 1);
    } else if ($button.val() == "=") {
      display = eval(display)
    } else {
      var butVal = $button.val();
      display += butVal;
    };
    $("#display").text(display);
  });

});