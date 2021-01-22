let nameInput = document.getElementById("nameF");

let surnameInput = document.getElementById("nameL");

let emailInput = document.getElementById("email");

let passwordInput = document.getElementById("pass");

let myDiv = document.getElementById("registerUserDiv");

let printButton = document.getElementById("buttonID");

//Nachin 1:

// function FullString(){
//     let newParagraph = document.createElement("p")
//     newParagraph.innerText = `Thank you for entering your name:${nameInput.value}, your last name:${surnameInput.value}, your email: ${emailInput.value} and your password: ${passwordInput.value}. Welcome!`
//     myDiv.appendChild(newParagraph);
// }

// printButton.addEventListener("click", FullString);

//---------------------------------------------------------------

//Nachin 2:
function nameO() {
    var stringOne = `${nameInput.value}`;
    return stringOne;
}

function surname() {
    var stringTwo = `${surnameInput.value}`;
    return stringTwo;
}

function email() {
    var stringThree = `${emailInput.value}`;
    return stringThree;
}

function pass() {
    var stringFour = `${passwordInput.value}`;
    return stringFour;
}

printButton.addEventListener("click", function () {
    let newParagraph = document.createElement("p")
    newParagraph.innerText = `Hey ${nameO()} ${surname()}. Thank you for registering! This is the email you entered: ${email()}.Your password is: ${pass()}.`
    myDiv.appendChild(newParagraph);
});

