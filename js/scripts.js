$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val()
    var array = userInput.split(" ");

    var threeOrMoreArray = [];
    array.forEach(function(input) {
      if (input.length >= 3) {
        threeOrMoreArray.push(input)
      }
    });

    var lastArray = threeOrMoreArray.reverse().join();
    $("#output").text(lastArray);
  });
});
