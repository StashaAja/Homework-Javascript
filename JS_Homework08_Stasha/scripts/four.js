$(document).ready(function () {

  $("#oneNumber");
  $("#twoNumber");
  $("#threeNumber");

  let button = $("#avButton");

  button.click(function (e) {

    let a = parseInt($("#oneNumber").val());

    let b = parseInt($("#twoNumber").val());

    let c = parseInt($("#threeNumber").val());

    let average = (a + b + c) / 3;

    console.log(average);
    console.log(typeof (a));


    if (!a && !b && !c) {
      $("#four").append(`<h3>Please fill in the three input fields!</h3>`);
    } else if (!a) {
      $("#four").append(`<h3>Please make sure to fill in the first field!</h3>`);
    } else if (!b) {
      $("#four").append(`<h3>Please make sure to fill in the second field!</h3>`);
    } else if (!c) {
      $("#four").append(`<h3>Please make sure to fill in the third field!</h3>`);
    } else {
      if (average >= 10) {
        $("#four").append(`<h1 id="show">This is the average: ${average} </h1>`);

        $("#show").css("color", "green");
      } else {
        $("#four").append(`<h1 id="show">This is the average: ${average} </h1>`);

        $("#show").css("color", "red");
      }
    }



  })




})