
$(document).ready(function(){

    let firstDiv = $("#first");

    let inUser = $("#inUser");

    let button = $("#butUser");

    let h1 = $("#h1Rezult");

    //Option One:

    // button.click(function(e){

    //     h1.text(`Hello ${inUser.val()} have a great day!`)
    // });
    //---------------------------------------------------------------------
    //Option Two:

    let divHTML = firstDiv.html();

    button.click(function(e){
       
        firstDiv.after(`<h1 id="tryOne">Hello ${inUser.val()} have a great day!</h1>`); //Na click kreiram nov h1 vo koj go dava rezultatot
        
    })
    
    //Question 1: Kako toj novo kreiraniot h1 da go zemam i na mousever da go izbrishe tektsot?
    //pogore staviv id = '#tryOne' kade shto go kreirav i probav taka da go zemam.
    let h1New = $('#tryOne')
    console.log(h1New);

    // h1New.mouseover(function(e){ 
    //     let h1New = $('#tryOne') 
    //     h1New.text('');
    // })

    h1New.on("mouseover",function(){  
        h1New.text('');
    })
});

