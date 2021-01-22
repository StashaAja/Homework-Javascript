let contentDiv = document.getElementById("content");

let nameI = document.getElementById("nameInput");

let lastNameI = document.getElementById("lastNameInput");

let clickButton = document.getElementById("clickButton");

//task one:

function welcomeFullName() {

    contentDiv.innerText = `Hi ${nameI.value} ${lastNameI.value}.Welcome!`
}

clickButton.addEventListener("click", welcomeFullName);

//task two:

contentDiv.addEventListener("mouseover", function (event) {
    contentDiv.innerText = ``;
});

//bonus:

let givenNameValue = "David";
let givenLastNameValue = "Beckham";

// console.log(typeof(givenLatNameValue.length));

function checkTheName(val, len) {
    len = parseInt(givenNameValue.length);
    // console.log(`broj od iminja zadadeni od user: ${len}`)
    // console.log(`tip na brojot od iminja zadadeni od user: ${typeof(len)}`)

    if (parseInt(val.length) < len) {
        contentDiv.innerText = `Bonus: The name you entered: ${val} is smaller than the given name value!`
    } else if (parseInt(val.length) == len) {
        contentDiv.innerText = `Bonus: The name you entered: ${val} is equal in length as the given name value!`
    } else {
        contentDiv.innerText = `Bonus: The name you entered: ${val} is bigger than the given name value!`
    }


}



function checkTheLastName(valLast, lenLast) {

    lenLast = parseInt(givenLastNameValue.length);

    if (parseInt(valLast.length) < lenLast) {
        contentDiv.innerText = `Bonus: The Last Name you entered: ${valLast} is smaller than the given last name value!`
    } else if (parseInt(valLast.length) == lenLast) {
        contentDiv.innerText = `Bonus: The Last Name you entered: ${valLast} is equal in length as the given last name value!`
    }
    else {
        contentDiv.innerText = `Bonus: The Last Name you entered: ${valLast} is bigger than the given last name value!`
    }
}


nameI.addEventListener("blur", function (event) {
    checkTheName(event.target.value, givenNameValue);
})

lastNameI.addEventListener("blur", function (event) {
    checkTheLastName(event.target.value, givenLastNameValue);
})





