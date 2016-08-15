$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("button#reset").click(function() {
      $("#output").hide();
    });
    
    var userInput = $("input#sentence").val()
    var array = userInput.split(" ");

    var threeOrMoreArray = [];
    array.forEach(function(input) {
      if (input.length >= 3) {
        threeOrMoreArray.push(input)
      }
    });

    var lastArray = threeOrMoreArray.reverse().join(" ");
    $("#output").text(lastArray).show();
  });
});
