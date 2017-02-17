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

    if (!isChecked1 || !isChecked2 || !isChecked3 || !isChecked4 || !food) {
      alert("fill in every field!");
    } else {
      if (isChecked1 === "answer1") {
        androidPoints += 1;
        netPoints += 1;
        railsPoints += 1;
        drupalPoints += 1;
      } else {
        designPoints += 2;
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
        netPoints +=2;
      } else if (isChecked3 === "answer2") {
        androidPoints += 2;
      } else if (isChecked3 === "answer3") {
        railsPoints += 2;
        drupalPoints += 2;
      } else {
        designPoints += 2;
      }

      if (isChecked4 === "answer1") {
        netPoints += 1;
        railsPoints += 1;
        drupalPoints += 1;
        androidPoints += 1;
      } else {
        designPoints += 1;
      }

      if (designPoints >= netPoints && designPoints >= railsPoints && designPoints >= drupalPoints && designPoints >= androidPoints) {
        $("#suggestion").show().text("You might consider the CSS/Design track. Once you get a job, you can eat all the " + food + " that you want!");
      } else if (netPoints >= designPoints && netPoints >= railsPoints && netPoints >= drupalPoints && netPoints >= androidPoints) {
        $("#suggestion").show().text("You might consider the C#/.NET track. Once you get a job, you can eat all the " + food + " that you want!");
      } else if (railsPoints >= designPoints && railsPoints >= netPoints && railsPoints >= drupalPoints && railsPoints >= androidPoints) {
        $("#suggestion").show().text("You might consider the Ruby/Rails track. Once you get a job, you can eat all the " + food + " that you want!");
      } else if (drupalPoints >= designPoints && drupalPoints >= netPoints && drupalPoints >= railsPoints && drupalPoints >= androidPoints) {
        $("#suggestion").show().text("You might consider the PHP/Drupal track. Once you get a job, you can eat all the " + food + " that you want!");
      } else {
        $("#suggestion").show().text("You might consider the Java/Android track. Once you get a job, you can eat all the " + food + " that you want!");
      }
    }



    event.preventDefault();
  });


});
