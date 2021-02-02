$(document).ready(function () {
    let buttonUser = $("#buttonUser");
    let textUser = $("#textUser");
    let colorUser = $("#colorUser");
    let h3ForMessages = $("#h3ForMessages");

    buttonUser.click(function (e) {

        let newHeader = buttonUser.after(`<h2>${textUser.val()}</h2>`)

        //Question2: zakomentiran obid koj ne mi raboteshe. Zashto ne e newHeader h2 elementot koj go kreiram gore?
        // newHeader.text(`${textUser.val()}`) //Zashto vaka nekjeshe textot da go vnese?
        // newHeader.css("color",`${colorUser.val()}`) //Kako ova ja menja bojata na button?

        if ((!textUser.val()) && (!colorUser.val())) {

            h3ForMessages.text('Please enter both text or color!')

        } else if (!textUser.val()) {

            h3ForMessages.text('Please enter some text!')

            //Question3: Validacija za color, osven prazen string nz kako da gi opfatam site boi koi nekoj user bi mozelo da gi vnese? Ako moze nekoja idea.   
        } else if (!colorUser.val()) {

            h3ForMessages.text('Please enter some color!')

        }
        else {
            let h2 = $("h2")

            console.log(h2.text());

            h2.css("color", `${colorUser.val()}`);
        }
    })

});