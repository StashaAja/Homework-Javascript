$(document).ready(function () {

    myColorSelect = $("#myColor");

    red = $("#red");
    blue = $("#blue");
    green = $("#green");

    contentH2 = $("#content");
    buttonUser = $("#buttonUserThree");



// Reshenie:

//to save and print the select event and print the value in h2:
$("#myColor").change(function(){
    var selectedValue = $(this).val();
    $("#result").html(`This is what was selected: ${selectedValue}`);
    $("#result").css("color",`${selectedValue}`)
});

buttonUser.click(function(e){
    
    //to remove all options:
    $("option").remove();

    //to add a new option:
    $("#myColor").append('<option id="coldplay" value ="Yellow"> Yellow </option>');
    let yellowOption = $("#coldplay");
    yellowOption.text(yellowOption.val());
    yellowOption.css("color","yellow"); //Question 4: nz zashto ne raboti ova? Sakav textot da e zolt na noviot option. 

})















});
