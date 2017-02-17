$(document).ready(function() {
  $("form").submit(function() {
    var food = $("input#food").val();
    var isChecked = $("input:radio[name=question1]:checked").val();
    var designPoints = 0;
    var backPoints = 0;

    if (isChecked === "answer1") {
      backPoints += 1;
    } else {
      designPoints += 1;
    }

    alert("design: " + designPoints + ", backend: " + backPoints);

    $("#suggestion").toggle().text("Once you get a job, you can eat all the " + food + " that you want!");
    event.preventDefault();
  });
});
