$(document).ready(function() {
  var displySuggestion = function() {
    $("#suggestion").show()
    $("#suggest-text").text("You might consider the " + suggestion + " track. Once you get a job, you can eat all the " + food + " that you want!");
  }
  $("input[type='radio']").click(function(){
      $("#suggestion").hide()
   });
  var food;
  var suggestion = "";
  $("form").submit(function() {
    food = $("input#food").val().toLowerCase();
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
        netPoints += 2;
        railsPoints += 2;
        drupalPoints += 2;
        androidPoints += 2;
      } else {
        designPoints += 2;
      }
      if (designPoints >= netPoints && designPoints >= railsPoints && designPoints >= drupalPoints && designPoints >= androidPoints) {
        suggestion = "CSS/Design";
      } else if (netPoints >= designPoints && netPoints >= railsPoints && netPoints >= drupalPoints && netPoints >= androidPoints) {
        suggestion = "C#/.NET";
      } else if (railsPoints >= designPoints && railsPoints >= netPoints && railsPoints >= drupalPoints && railsPoints >= androidPoints) {
        suggestion = "Ruby/Rails";
      } else if (drupalPoints >= designPoints && drupalPoints >= netPoints && drupalPoints >= railsPoints && drupalPoints >= androidPoints) {
        suggestion = "PHP/Drupal";
      } else {
        suggestion = "Java/Android";
      }
      displySuggestion();
    }
    window.scrollTo(0, document.body.scrollHeight);
    event.preventDefault();
  });
});
