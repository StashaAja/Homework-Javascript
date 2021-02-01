//Exercise level 2:
// Create an ATM machine. Use objects. The ATM has property balance. Initialize it with some value.
// The ATM should have the following functionalities:
// - make deposit (this function should add money to the balance)
// - make withdrawal (this function should  withdraw money)
// - get the balance (this function should display the current balance)
// - display interactive menu using prompt (1 -> get balance, 2-> make deposit, 3 -> withdrawal, 4 - exit).
// **Bonus**Use dom elements and events (ex. select, input, buttons..)

// let inputUser = document.getElementById("inputUser").value;

let enterButton = document.getElementById("enter");

let myDivSecond = document.getElementById("myDivSecond");

let enterButtonW = document.getElementById("enterW");

let enterButtonB = document.getElementById("enterB");


function ATM(bal) {

    this.balance = bal;

    this.deposit = function () {

        let inputUser = document.getElementById("inputUser").value;
        let numberInput = parseInt(inputUser);

        console.log(bal)

        bal += numberInput;
        let newParagraph = document.createElement("p");

        newParagraph.innerText = `This is your new balance ${bal}`

        myDivSecond.appendChild(newParagraph);

    }

    this.withdrawal = function () {

        let withDrawalUser = document.getElementById("withDrawalUser").value;
        let numberInput = parseInt(withDrawalUser);

        if (numberInput <= bal) {
            bal -= numberInput;
            let newParagraph = document.createElement("p");

            newParagraph.innerText = `This is your new balance ${bal} you have withdrawn: ${numberInput}`

            myDivSecond.appendChild(newParagraph);
        } else {
            let newParagraph = document.createElement("p");

            newParagraph.innerText = `You don't have enough funds!`

            myDivSecond.appendChild(newParagraph);
        }
    }

    this.getBalance = function () {
        let newParagraph = document.createElement("p");

        newParagraph.innerText = `This is your current balance ${this.balance}!`

        myDivSecond.appendChild(newParagraph);
    }

}

//---------------------------------------------------------------------------
let tryOne = new ATM(3000);

enterButton.addEventListener("click", function () {

    tryOne.deposit();
})


enterButtonW.addEventListener("click", function () {


    tryOne.withdrawal();
})

enterButtonB.addEventListener("click", function () {


    tryOne.getBalance();
});