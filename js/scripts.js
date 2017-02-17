$(document).ready(function() {
  $("form").submit(function() {
    var food = $("input#food").val();
    var isChecked1 = $("input:radio[name=question1]:checked").val();
    var isChecked2 = $("input:radio[name=question2]:checked").val();
    var isChecked3 = $("input:radio[name=question3]:checked").val();
    var isChecked4 = $("input:radio[name=question4]:checked").val();
    var designPoints = 0;
    var androidPoints = 0;
    var netPoints = 0;
    var railsPoints = 0;
    var drupalPoints = 0;

    if (!isChecked1 || !isChecked2 || !isChecked3 || !isChecked4) {
      alert("fill in every field!");
    } else {
      if (isChecked1 === "answer1") {
        androidPoints += 1;
        netPoints += 1;
        railsPoints += 1;
        drupalPoints += 1;
      } else {
        designPoints += 1;
        drupalPoints += 1;
      }

      if (isChecked2 === "answer1") {
        netPoints += 1;
        drupalPoints += 1;
      } else if (isChecked2 === "answer2") {
        androidPoints += 1;
        railsPoints += 1;
      } else {
        designPoints += 1;
        railsPoints += 1;
      }

      if (isChecked3 === "answer1") {
        netPoints +=1;
      } else if (isChecked3 === "answer2") {
        androidPoints += 1;
      } else if (isChecked3 === "answer3") {
        railsPoints += 1;
        drupalPoints += 1;
      } else {
        designPoints += 2;
      }

      if (isChecked4 === "answer1") {
        netPoints += 1;
        railsPoints += 1;
        drupalPoints += 1;
        androidPoints += 1;
      } else {
        designPoints += 2;
      }

      if (designPoints > netPoints && designPoints > railsPoints && designPoints > drupalPoints && designPoints > androidPoints) {
        $("#suggestion").show().text("You might consider the Design track. Once you get a job, you can eat all the " + food + " that you want!");
        alert("design: " + designPoints);
      } else if (netPoints > designPoints && netPoints > railsPoints && netPoints > drupalPoints && netPoints > androidPoints) {
        $("#suggestion").show().text("You might consider the .NET track. Once you get a job, you can eat all the " + food + " that you want!");
        alert("net: " + netPoints);
      } else if (railsPoints > designPoints && railsPoints > netPoints && railsPoints > drupalPoints && railsPoints > androidPoints) {
        $("#suggestion").show().text("You might consider the Rails track. Once you get a job, you can eat all the " + food + " that you want!");
        alert("rails: " + railsPoints);
      } else if (drupalPoints > designPoints && drupalPoints > netPoints && drupalPoints > railsPoints && drupalPoints > androidPoints) {
        $("#suggestion").show().text("You might consider the Drupal track. Once you get a job, you can eat all the " + food + " that you want!");
        alert("drupal: " + drupalPoints);
      } else {
        $("#suggestion").show().text("You might consider the Android track. Once you get a job, you can eat all the " + food + " that you want!");
        alert("android: " + androidPoints);
      }
    }


    event.preventDefault();
  });
});
